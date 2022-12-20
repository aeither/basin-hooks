import type { Address } from 'abitype'
import { z } from 'zod'

import type { Contract } from '../config'
import { fromZodError } from '../errors'
import { fetch } from './fetch'

export type BlockExplorerConfig = {
  /**
   * API key for block explorer. Appended to the request URL as query param `&apikey=${apiKey}`.
   */
  apiKey?: string
  /**
   * Base URL for block explorer.
   */
  baseUrl: string
  /**
   * Contracts to fetch ABIs for.
   */
  contracts: Omit<Contract, 'abi'>[]
  /**
   * Function to get address from contract config.
   */
  getAddress?(config: { address: Contract['address'] }): Address
  /**
   * Name of source.
   */
  name?: Contract['name']
}

const BlockExplorerResponse = z.discriminatedUnion('status', [
  z.object({
    status: z.literal('1'),
    message: z.literal('OK'),
    result: z.string().transform((val) => JSON.parse(val) as Contract['abi']),
  }),
  z.object({
    status: z.literal('0'),
    message: z.literal('NOTOK'),
    result: z.string(),
  }),
])

/**
 * Fetches contract ABIs from block explorers, supporting `?module=contract&action=getabi` requests.
 */
export function blockExplorer({
  apiKey,
  baseUrl,
  contracts,
  getAddress = ({ address }) => {
    if (!address) throw new Error('address is required')
    if (typeof address === 'string') return address
    return Object.values(address)[0]!
  },
  name = 'Block Explorer',
}: BlockExplorerConfig) {
  return fetch({
    contracts,
    name,
    async parse({ response }) {
      const json = await response.json()
      const parsed = await BlockExplorerResponse.safeParseAsync(json)
      if (!parsed.success)
        throw fromZodError(parsed.error, { prefix: 'Invalid response' })
      if (parsed.data.status === '0') throw new Error(parsed.data.result)
      return parsed.data.result
    },
    request({ address }) {
      if (!address) throw new Error('address is required')
      return {
        url: `${baseUrl}?module=contract&action=getabi&address=${getAddress({
          address,
        })}${apiKey ? `&apikey=${apiKey}` : ''}`,
      }
    },
  })
}
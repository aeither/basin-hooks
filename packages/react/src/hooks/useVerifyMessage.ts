'use client'

import type {
  Config,
  ResolvedRegister,
  VerifyMessageErrorType,
} from 'basin-hooks'
import type { Compute } from 'basin-hooks/internal'
import type { VerifyMessageQueryFnData } from 'basin-hooks/query'
import {
  type VerifyMessageData,
  type VerifyMessageOptions,
  type VerifyMessageQueryKey,
  verifyMessageQueryOptions,
} from 'basin-hooks/query'
import type { ConfigParameter, QueryParameter } from '../types/properties.js'
import { type UseQueryReturnType, useQuery } from '../utils/query.js'
import { useChainId } from './useChainId.js'
import { useConfig } from './useConfig.js'

export type UseVerifyMessageParameters<
  config extends Config = Config,
  selectData = VerifyMessageData,
> = Compute<
  VerifyMessageOptions<config> &
    ConfigParameter<config> &
    QueryParameter<
      VerifyMessageQueryFnData,
      VerifyMessageErrorType,
      selectData,
      VerifyMessageQueryKey<config>
    >
>

export type UseVerifyMessageReturnType<selectData = VerifyMessageData> =
  UseQueryReturnType<selectData, VerifyMessageErrorType>

/** https://wagmi.sh/react/api/hooks/useVerifyMessage */
export function useVerifyMessage<
  config extends Config = ResolvedRegister['config'],
  selectData = VerifyMessageData,
>(
  parameters: UseVerifyMessageParameters<config, selectData> = {},
): UseVerifyMessageReturnType<selectData> {
  const { address, message, signature, query = {} } = parameters

  const config = useConfig(parameters)
  const chainId = useChainId({ config })

  const options = verifyMessageQueryOptions(config, {
    ...parameters,
    chainId: parameters.chainId ?? chainId,
  })
  const enabled = Boolean(
    address && message && signature && (query.enabled ?? true),
  )

  return useQuery({ ...query, ...options, enabled })
}

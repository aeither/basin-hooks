import { http, createConfig } from 'basin-hooks'
import { base, celo, mainnet } from 'basin-hooks/chains'

export const config = createConfig({
  chains: [base, celo, mainnet],
  transports: {
    [base.id]: http(),
    [celo.id]: http(),
    [mainnet.id]: http(),
  },
})

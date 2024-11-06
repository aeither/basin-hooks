import { createConfig, http } from 'basin-hooks'
import { mainnet, sepolia } from 'basin-hooks/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

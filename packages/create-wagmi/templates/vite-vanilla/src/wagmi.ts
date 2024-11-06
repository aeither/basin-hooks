import { coinbaseWallet, injected, walletConnect } from '@wagmi/connectors'
import { createConfig, http } from 'basin-hooks'
import { mainnet, sepolia } from 'basin-hooks/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    coinbaseWallet(),
    walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

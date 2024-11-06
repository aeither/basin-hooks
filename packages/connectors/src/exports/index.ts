// biome-ignore lint/performance/noBarrelFile: entrypoint module
export {
  injected,
  mock,
  type InjectedParameters,
  type MockParameters,
} from 'basin-hooks'

export {
  coinbaseWallet,
  type CoinbaseWalletParameters,
} from '../coinbaseWallet.js'

export { metaMask, type MetaMaskParameters } from '../metaMask.js'

export { safe, type SafeParameters } from '../safe.js'

export {
  walletConnect,
  type WalletConnectParameters,
} from '../walletConnect.js'

export { version } from '../version.js'

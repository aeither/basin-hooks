////////////////////////////////////////////////////////////////////////////////
// Plugin
////////////////////////////////////////////////////////////////////////////////

// biome-ignore lint/performance/noBarrelFile: entrypoint module
export { WagmiPlugin, configKey, type WagmiPluginOptions } from '../plugin.js'

////////////////////////////////////////////////////////////////////////////////
// Errors
////////////////////////////////////////////////////////////////////////////////

export { BaseError, type BaseErrorType } from '../errors/base.js'

export {
  WagmiInjectionContextError,
  WagmiPluginNotFoundError,
  type WagmiInjectionContextErrorType,
  type WagmiPluginNotFoundErrorType,
} from '../errors/plugin.js'

////////////////////////////////////////////////////////////////////////////////
// Composables
////////////////////////////////////////////////////////////////////////////////

export {
  useAccount,
  type UseAccountParameters,
  type UseAccountReturnType,
} from '../composables/useAccount.js'

export {
  useAccountEffect,
  type UseAccountEffectParameters,
} from '../composables/useAccountEffect.js'

export {
  useBalance,
  type UseBalanceParameters,
  type UseBalanceReturnType,
} from '../composables/useBalance.js'

export {
  useBlockNumber,
  type UseBlockNumberParameters,
  type UseBlockNumberReturnType,
} from '../composables/useBlockNumber.js'

export {
  useBytecode,
  type UseBytecodeParameters,
  type UseBytecodeReturnType,
} from '../composables/useBytecode.js'

export {
  useChainId,
  type UseChainIdParameters,
  type UseChainIdReturnType,
} from '../composables/useChainId.js'

export {
  useClient,
  type UseClientParameters,
  type UseClientReturnType,
} from '../composables/useClient.js'

export {
  useConnectorClient,
  type UseConnectorClientParameters,
  type UseConnectorClientReturnType,
} from '../composables/useConnectorClient.js'

export {
  useChains,
  type UseChainsParameters,
  type UseChainsReturnType,
} from '../composables/useChains.js'

export {
  useConfig,
  type UseConfigParameters,
  type UseConfigReturnType,
} from '../composables/useConfig.js'

export {
  useConnect,
  type UseConnectParameters,
  type UseConnectReturnType,
} from '../composables/useConnect.js'

export {
  useConnections,
  type UseConnectionsParameters,
  type UseConnectionsReturnType,
} from '../composables/useConnections.js'

export {
  useConnectors,
  type UseConnectorsParameters,
  type UseConnectorsReturnType,
} from '../composables/useConnectors.js'

export {
  useDisconnect,
  type UseDisconnectParameters,
  type UseDisconnectReturnType,
} from '../composables/useDisconnect.js'

export {
  useEnsAddress,
  type UseEnsAddressParameters,
  type UseEnsAddressReturnType,
} from '../composables/useEnsAddress.js'

export {
  useEnsAvatar,
  type UseEnsAvatarParameters,
  type UseEnsAvatarReturnType,
} from '../composables/useEnsAvatar.js'

export {
  useEnsName,
  type UseEnsNameParameters,
  type UseEnsNameReturnType,
} from '../composables/useEnsName.js'

export {
  useEstimateGas,
  type UseEstimateGasParameters,
  type UseEstimateGasReturnType,
} from '../composables/useEstimateGas.js'

export {
  useReadContract,
  type UseReadContractParameters,
  type UseReadContractReturnType,
} from '../composables/useReadContract.js'

export {
  useReconnect,
  type UseReconnectParameters,
  type UseReconnectReturnType,
} from '../composables/useReconnect.js'

export {
  useSendTransaction,
  type UseSendTransactionParameters,
  type UseSendTransactionReturnType,
} from '../composables/useSendTransaction.js'

export {
  useSignMessage,
  type UseSignMessageParameters,
  type UseSignMessageReturnType,
} from '../composables/useSignMessage.js'

export {
  useSignTypedData,
  type UseSignTypedDataParameters,
  type UseSignTypedDataReturnType,
} from '../composables/useSignTypedData.js'

export {
  useSimulateContract,
  type UseSimulateContractParameters,
  type UseSimulateContractReturnType,
} from '../composables/useSimulateContract.js'

export {
  useSwitchAccount,
  type UseSwitchAccountParameters,
  type UseSwitchAccountReturnType,
} from '../composables/useSwitchAccount.js'

export {
  useSwitchChain,
  type UseSwitchChainParameters,
  type UseSwitchChainReturnType,
} from '../composables/useSwitchChain.js'

export {
  useTransaction,
  type UseTransactionParameters,
  type UseTransactionReturnType,
} from '../composables/useTransaction.js'

export {
  useTransactionReceipt,
  type UseTransactionReceiptParameters,
  type UseTransactionReceiptReturnType,
} from '../composables/useTransactionReceipt.js'

export {
  useWatchBlockNumber,
  type UseWatchBlockNumberParameters,
  type UseWatchBlockNumberReturnType,
} from '../composables/useWatchBlockNumber.js'

export {
  useWatchContractEvent,
  type UseWatchContractEventParameters,
  type UseWatchContractEventReturnType,
} from '../composables/useWatchContractEvent.js'

export {
  useWaitForTransactionReceipt,
  type UseWaitForTransactionReceiptParameters,
  type UseWaitForTransactionReceiptReturnType,
} from '../composables/useWaitForTransactionReceipt.js'

export {
  useWriteContract,
  type UseWriteContractParameters,
  type UseWriteContractReturnType,
} from '../composables/useWriteContract.js'

////////////////////////////////////////////////////////////////////////////////
// basin-hooks
////////////////////////////////////////////////////////////////////////////////

export {
  ChainNotConfiguredError,
  ConnectorAccountNotFoundError,
  ConnectorAlreadyConnectedError,
  ConnectorChainMismatchError,
  ConnectorNotFoundError,
  ConnectorUnavailableReconnectingError,
  ProviderNotFoundError,
  SwitchChainNotSupportedError,
  // Utilities
  cookieStorage,
  cookieToInitialState,
  createConfig,
  createConnector,
  createStorage,
  // Transports
  custom,
  deepEqual,
  deserialize,
  fallback,
  http,
  noopStorage,
  normalizeChainId,
  parseCookie,
  serialize,
  unstable_connector,
  webSocket,
  // Errors
  type ChainNotConfiguredErrorType,
  type Config,
  // Config
  type Connection,
  type Connector,
  type ConnectorAccountNotFoundErrorType,
  type ConnectorAlreadyConnectedErrorType,
  type ConnectorChainMismatchErrorType,
  // Connector
  type ConnectorEventMap,
  type ConnectorNotFoundErrorType,
  type ConnectorUnavailableReconnectingErrorType,
  type CreateConfigParameters,
  type CreateConnectorFn,
  // Storage
  type CreateStorageParameters,
  type PartializedState,
  type ProviderNotFoundErrorType,
  // Types
  type Register,
  type ResolvedRegister,
  type State,
  type Storage,
  type SwitchChainNotSupportedErrorType,
} from 'basin-hooks'

////////////////////////////////////////////////////////////////////////////////
// Version
////////////////////////////////////////////////////////////////////////////////

export { version } from '../version.js'

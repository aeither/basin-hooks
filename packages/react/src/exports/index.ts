////////////////////////////////////////////////////////////////////////////////
// Context
////////////////////////////////////////////////////////////////////////////////

// biome-ignore lint/performance/noBarrelFile: entrypoint module
export {
  /** @deprecated Use `WagmiContext` instead */
  WagmiContext as Context,
  /** @deprecated Use `WagmiProvider` instead */
  WagmiProvider as WagmiConfig,
  WagmiContext,
  WagmiProvider,
  type WagmiProviderProps,
} from '../context.js'

////////////////////////////////////////////////////////////////////////////////
// Errors
////////////////////////////////////////////////////////////////////////////////

export { BaseError, type BaseErrorType } from '../errors/base.js'

export {
  WagmiProviderNotFoundError,
  type WagmiProviderNotFoundErrorType,
} from '../errors/context.js'

////////////////////////////////////////////////////////////////////////////////
// Hooks
////////////////////////////////////////////////////////////////////////////////

export {
  useAccount,
  type UseAccountParameters,
  type UseAccountReturnType,
} from '../hooks/useAccount.js'

export {
  useAccountEffect,
  type UseAccountEffectParameters,
} from '../hooks/useAccountEffect.js'

export {
  useBalance,
  type UseBalanceParameters,
  type UseBalanceReturnType,
} from '../hooks/useBalance.js'

export {
  useBlock,
  type UseBlockParameters,
  type UseBlockReturnType,
} from '../hooks/useBlock.js'

export {
  useBlockNumber,
  type UseBlockNumberParameters,
  type UseBlockNumberReturnType,
} from '../hooks/useBlockNumber.js'

export {
  useBlockTransactionCount,
  type UseBlockTransactionCountParameters,
  type UseBlockTransactionCountReturnType,
} from '../hooks/useBlockTransactionCount.js'

export {
  useBytecode,
  type UseBytecodeParameters,
  type UseBytecodeReturnType,
} from '../hooks/useBytecode.js'

export {
  useCall,
  type UseCallParameters,
  type UseCallReturnType,
} from '../hooks/useCall.js'

export {
  useChainId,
  type UseChainIdParameters,
  type UseChainIdReturnType,
} from '../hooks/useChainId.js'

export {
  useChains,
  type UseChainsParameters,
  type UseChainsReturnType,
} from '../hooks/useChains.js'

export {
  useClient,
  type UseClientParameters,
  type UseClientReturnType,
} from '../hooks/useClient.js'

export {
  useConfig,
  type UseConfigParameters,
  type UseConfigReturnType,
} from '../hooks/useConfig.js'

export {
  useConnect,
  type UseConnectParameters,
  type UseConnectReturnType,
} from '../hooks/useConnect.js'

export {
  useConnections,
  type UseConnectionsParameters,
  type UseConnectionsReturnType,
} from '../hooks/useConnections.js'

export {
  useConnectors,
  type UseConnectorsParameters,
  type UseConnectorsReturnType,
} from '../hooks/useConnectors.js'

export {
  useConnectorClient,
  type UseConnectorClientParameters,
  type UseConnectorClientReturnType,
} from '../hooks/useConnectorClient.js'

export {
  useDeployContract,
  type UseDeployContractParameters,
  type UseDeployContractReturnType,
} from '../hooks/useDeployContract.js'

export {
  useDisconnect,
  type UseDisconnectParameters,
  type UseDisconnectReturnType,
} from '../hooks/useDisconnect.js'

export {
  useEnsAddress,
  type UseEnsAddressParameters,
  type UseEnsAddressReturnType,
} from '../hooks/useEnsAddress.js'

export {
  useEnsAvatar,
  type UseEnsAvatarParameters,
  type UseEnsAvatarReturnType,
} from '../hooks/useEnsAvatar.js'

export {
  useEnsName,
  type UseEnsNameParameters,
  type UseEnsNameReturnType,
} from '../hooks/useEnsName.js'

export {
  useEnsResolver,
  type UseEnsResolverParameters,
  type UseEnsResolverReturnType,
} from '../hooks/useEnsResolver.js'

export {
  useEnsText,
  type UseEnsTextParameters,
  type UseEnsTextReturnType,
} from '../hooks/useEnsText.js'

export {
  useEstimateFeesPerGas,
  /** @deprecated Use `useEstimateFeesPerGas` instead */
  useEstimateFeesPerGas as useFeeData,
  type UseEstimateFeesPerGasParameters,
  type UseEstimateFeesPerGasReturnType,
} from '../hooks/useEstimateFeesPerGas.js'

export {
  useEstimateGas,
  type UseEstimateGasParameters,
  type UseEstimateGasReturnType,
} from '../hooks/useEstimateGas.js'

export {
  useEstimateMaxPriorityFeePerGas,
  type UseEstimateMaxPriorityFeePerGasParameters,
  type UseEstimateMaxPriorityFeePerGasReturnType,
} from '../hooks/useEstimateMaxPriorityFeePerGas.js'

export {
  useFeeHistory,
  type UseFeeHistoryParameters,
  type UseFeeHistoryReturnType,
} from '../hooks/useFeeHistory.js'

export {
  useGasPrice,
  type UseGasPriceParameters,
  type UseGasPriceReturnType,
} from '../hooks/useGasPrice.js'

export {
  /** @deprecated Use `useInfiniteReadContracts` instead */
  useInfiniteReadContracts as useContractInfiniteReads,
  useInfiniteReadContracts,
  type UseInfiniteContractReadsParameters,
  type UseInfiniteContractReadsReturnType,
} from '../hooks/useInfiniteReadContracts.js'

export {
  usePrepareTransactionRequest,
  type UsePrepareTransactionRequestParameters,
  type UsePrepareTransactionRequestReturnType,
} from '../hooks/usePrepareTransactionRequest.js'

export {
  useProof,
  type UseProofParameters,
  type UseProofReturnType,
} from '../hooks/useProof.js'

export {
  usePublicClient,
  type UsePublicClientParameters,
  type UsePublicClientReturnType,
} from '../hooks/usePublicClient.js'

export {
  /** @deprecated Use `useWriteContract` instead */
  useReadContract as useContractRead,
  useReadContract,
  type UseReadContractParameters,
  type UseReadContractReturnType,
} from '../hooks/useReadContract.js'

export {
  /** @deprecated Use `useWriteContract` instead */
  useReadContracts as useContractReads,
  useReadContracts,
  type UseReadContractsParameters,
  type UseReadContractsReturnType,
} from '../hooks/useReadContracts.js'

export {
  useReconnect,
  type UseReconnectParameters,
  type UseReconnectReturnType,
} from '../hooks/useReconnect.js'

export {
  useSendTransaction,
  type UseSendTransactionParameters,
  type UseSendTransactionReturnType,
} from '../hooks/useSendTransaction.js'

export {
  useSignMessage,
  type UseSignMessageParameters,
  type UseSignMessageReturnType,
} from '../hooks/useSignMessage.js'

export {
  useSignTypedData,
  type UseSignTypedDataParameters,
  type UseSignTypedDataReturnType,
} from '../hooks/useSignTypedData.js'

export {
  useSimulateContract,
  type UseSimulateContractParameters,
  type UseSimulateContractReturnType,
} from '../hooks/useSimulateContract.js'

export {
  useStorageAt,
  type UseStorageAtParameters,
  type UseStorageAtReturnType,
} from '../hooks/useStorageAt.js'

export {
  useSwitchAccount,
  type UseSwitchAccountParameters,
  type UseSwitchAccountReturnType,
} from '../hooks/useSwitchAccount.js'

export {
  useSwitchChain,
  type UseSwitchChainParameters,
  type UseSwitchChainReturnType,
} from '../hooks/useSwitchChain.js'

export {
  /** @deprecated Use `useReadContracts` instead */
  useToken,
  type UseTokenParameters,
  type UseTokenReturnType,
} from '../hooks/useToken.js'

export {
  useTransaction,
  type UseTransactionParameters,
  type UseTransactionReturnType,
} from '../hooks/useTransaction.js'

export {
  useTransactionConfirmations,
  type UseTransactionConfirmationsParameters,
  type UseTransactionConfirmationsReturnType,
} from '../hooks/useTransactionConfirmations.js'

export {
  useTransactionCount,
  type UseTransactionCountParameters,
  type UseTransactionCountReturnType,
} from '../hooks/useTransactionCount.js'

export {
  useTransactionReceipt,
  type UseTransactionReceiptParameters,
  type UseTransactionReceiptReturnType,
} from '../hooks/useTransactionReceipt.js'

export {
  useVerifyMessage,
  type UseVerifyMessageParameters,
  type UseVerifyMessageReturnType,
} from '../hooks/useVerifyMessage.js'

export {
  useVerifyTypedData,
  type UseVerifyTypedDataParameters,
  type UseVerifyTypedDataReturnType,
} from '../hooks/useVerifyTypedData.js'

export {
  useWalletClient,
  type UseWalletClientParameters,
  type UseWalletClientReturnType,
} from '../hooks/useWalletClient.js'

export {
  useWaitForTransactionReceipt,
  type UseWaitForTransactionReceiptParameters,
  type UseWaitForTransactionReceiptReturnType,
} from '../hooks/useWaitForTransactionReceipt.js'

export {
  useWatchAsset,
  type UseWatchAssetParameters,
  type UseWatchAssetReturnType,
} from '../hooks/useWatchAsset.js'

export {
  useWatchBlocks,
  type UseWatchBlocksParameters,
  type UseWatchBlocksReturnType,
} from '../hooks/useWatchBlocks.js'

export {
  useWatchBlockNumber,
  type UseWatchBlockNumberParameters,
  type UseWatchBlockNumberReturnType,
} from '../hooks/useWatchBlockNumber.js'

export {
  useWatchContractEvent,
  type UseWatchContractEventParameters,
  type UseWatchContractEventReturnType,
} from '../hooks/useWatchContractEvent.js'

export {
  useWatchPendingTransactions,
  type UseWatchPendingTransactionsParameters,
  type UseWatchPendingTransactionsReturnType,
} from '../hooks/useWatchPendingTransactions.js'

export {
  /** @deprecated Use `useWriteContract` instead */
  useWriteContract as useContractWrite,
  useWriteContract,
  type UseWriteContractParameters,
  type UseWriteContractReturnType,
} from '../hooks/useWriteContract.js'

////////////////////////////////////////////////////////////////////////////////
// Hydrate
////////////////////////////////////////////////////////////////////////////////

export {
  Hydrate,
  type HydrateProps,
} from '../hydrate.js'

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
  type Transport,
} from 'basin-hooks'

////////////////////////////////////////////////////////////////////////////////
// Version
////////////////////////////////////////////////////////////////////////////////

export { version } from '../version.js'

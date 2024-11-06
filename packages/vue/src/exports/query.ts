////////////////////////////////////////////////////////////////////////////////
// basin-hooks/query
////////////////////////////////////////////////////////////////////////////////

// biome-ignore lint/performance/noBarrelFile: entrypoint module
// biome-ignore lint/performance/noReExportAll: entrypoint module
export * from 'basin-hooks/query'

export {
  useMutation,
  type UseMutationParameters,
  type UseMutationReturnType,
} from '../utils/query.js'

export {
  useQuery,
  type UseQueryParameters,
  type UseQueryReturnType,
} from '../utils/query.js'

////////////////////////////////////////////////////////////////////////////////
// basin-hooks/query
////////////////////////////////////////////////////////////////////////////////

// biome-ignore lint/performance/noBarrelFile: entrypoint module
// biome-ignore lint/performance/noReExportAll: entrypoint module
export * from 'basin-hooks/query'

export {
  useInfiniteQuery,
  useMutation,
  useQuery,
  type UseInfiniteQueryParameters,
  type UseInfiniteQueryReturnType,
  type UseMutationParameters,
  type UseMutationReturnType,
  type UseQueryParameters,
  type UseQueryReturnType,
} from '../utils/query.js'

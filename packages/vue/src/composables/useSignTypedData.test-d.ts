import { typedData } from '@wagmi/test'
import type {
  SignTypedDataErrorType,
  SignTypedDataReturnType,
} from 'basin-hooks'
import type { SignTypedDataVariables } from 'basin-hooks/query'
import { expectTypeOf, test } from 'vitest'

import { useSignTypedData } from './useSignTypedData.js'

const contextValue = { foo: 'bar' } as const

test('context', () => {
  const { context, data, error, signTypedData, variables } = useSignTypedData({
    mutation: {
      onMutate(variables) {
        expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables>()
        return contextValue
      },
      onError(error, variables, context) {
        expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables>()
        expectTypeOf(error).toEqualTypeOf<SignTypedDataErrorType>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
      onSuccess(data, variables, context) {
        expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables>()
        expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue>()
      },
      onSettled(data, error, variables, context) {
        expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType | undefined>()
        expectTypeOf(error).toEqualTypeOf<SignTypedDataErrorType | null>()
        expectTypeOf(variables).toMatchTypeOf<SignTypedDataVariables>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
    },
  })

  expectTypeOf(data.value).toEqualTypeOf<SignTypedDataReturnType | undefined>()
  expectTypeOf(error.value).toEqualTypeOf<SignTypedDataErrorType | null>()
  expectTypeOf(variables.value).toMatchTypeOf<
    SignTypedDataVariables | undefined
  >()
  expectTypeOf(context.value).toEqualTypeOf<typeof contextValue | undefined>()

  signTypedData(
    {
      types: typedData.basic.types,
      primaryType: 'Person',
      message: {
        name: 'Bob',
        wallet: '0x',
      },
    },
    {
      onError(error, variables, context) {
        expectTypeOf(error).toEqualTypeOf<SignTypedDataErrorType>()
        expectTypeOf(variables).toMatchTypeOf<{
          types: typeof typedData.basic.types
          primaryType: 'Person'
          message: {
            name: string
            wallet: `0x${string}`
          }
        }>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
      onSuccess(data, variables, context) {
        expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType>()
        expectTypeOf(variables).toMatchTypeOf<{
          types: typeof typedData.basic.types
          primaryType: 'Person'
          message: {
            name: string
            wallet: `0x${string}`
          }
        }>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue>()
      },
      onSettled(data, error, variables, context) {
        expectTypeOf(data).toEqualTypeOf<SignTypedDataReturnType | undefined>()
        expectTypeOf(error).toEqualTypeOf<SignTypedDataErrorType | null>()
        expectTypeOf(variables).toMatchTypeOf<{
          types: typeof typedData.basic.types
          primaryType: 'Person'
          message: {
            name: string
            wallet: `0x${string}`
          }
        }>()
        expectTypeOf(context).toEqualTypeOf<typeof contextValue | undefined>()
      },
    },
  )
})

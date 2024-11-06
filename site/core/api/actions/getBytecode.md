<script setup>
const packageName = 'basin-hooks'
const actionName = 'getBytecode'
const typeName = 'getBytecode'
</script>

# getBytecode

Action for retrieving the bytecode at an address.

## Import

```ts
import { getBytecode } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getBytecode } from 'basin-hooks'
import { config } from './config'

await getBytecode(config, {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetBytecodeParameters } from 'basin-hooks'
```

### address

`Address`

The contract address.

::: code-group
```ts [index.ts]
import { getBytecode } from 'basin-hooks'
import { config } from './config'

await getBytecode(config, {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockNumber

`bigint | undefined`

The block number to check the bytecode at.

::: code-group
```ts [index.ts]
import { getBytecode } from 'basin-hooks'
import { config } from './config'

await getBytecode(config, {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  blockNumber: 16280770n, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockTag

`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`

The block tag to check the bytecode at.

::: code-group
```ts [index.ts]
import { getBytecode } from 'basin-hooks'
import { config } from './config'

await getBytecode(config, {
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  blockTag: 'safe', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### chainId

`config['chains'][number]['id'] | undefined`

The chain ID to check the bytecode at.

::: code-group
```ts [index.ts]
import { getBytecode } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

await getBytecode(config, {
  chainId: mainnet.id, // [!code focus]
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetBytecodeReturnType } from 'basin-hooks'
```

`Hex`

The contract's bytecode.

## Error

```ts
import { type GetBytecodeErrorType } from 'basin-hooks'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getBytecode`](https://viem.sh/docs/contract/getBytecode)

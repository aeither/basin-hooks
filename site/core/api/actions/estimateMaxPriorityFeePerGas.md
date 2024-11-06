<script setup>
const packageName = 'basin-hooks'
const actionName = 'estimateMaxPriorityFeePerGas'
const typeName = 'EstimateFeesPerGas'
</script>

# estimateMaxPriorityFeePerGas

Returns an estimate for the max priority fee per gas (in wei) for a transaction to be likely included in the next block.

## Import

```ts
import { estimateMaxPriorityFeePerGas } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { estimateMaxPriorityFeePerGas } from 'basin-hooks'
import { config } from './config'

const result = await estimateMaxPriorityFeePerGas(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type EstimateFeesPerGasParameters } from 'basin-hooks'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { estimateMaxPriorityFeePerGas } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const result = await estimateMaxPriorityFeePerGas(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type EstimateFeesPerGasReturnType } from 'basin-hooks'
```

`bigint`

An estimate (in wei) for the max priority fee per gas.

## Error

```ts
import { type EstimateFeesPerGasErrorType } from 'basin-hooks'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`estimateMaxPriorityFeePerGas`](https://viem.sh/docs/actions/public/estimateMaxPriorityFeePerGas.html)

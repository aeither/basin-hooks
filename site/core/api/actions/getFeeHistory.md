<script setup>
const packageName = 'basin-hooks'
const actionName = 'getFeeHistory'
const typeName = 'GetFeeHistory'
</script>

# getFeeHistory

Action for fetching a collection of historical gas information.

## Import

```ts
import { getFeeHistory } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getFeeHistory } from 'basin-hooks'
import { config } from './config'

const feeHistory = await getFeeHistory(config, {
  blockCount: 4,
  rewardPercentiles: [25, 75]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetFeeHistoryParameters } from 'basin-hooks'
```

### blockCount

`number`

Number of blocks in the requested range. Between 1 and 1024 blocks can be requested in a single query. Less than requested may be returned if not all blocks are available.

::: code-group
```ts [index.ts]
import { getFeeHistory } from 'basin-hooks'
import { config } from './config'

const feeHistory = await getFeeHistory(config, {
  blockCount: 4, // [!code focus]
  rewardPercentiles: [25, 75]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### rewardPercentiles

`number[]`

A monotonically increasing list of percentile values to sample from each block's effective priority fees per gas in ascending order, weighted by gas used.

::: code-group
```ts [index.ts]
import { getFeeHistory } from 'basin-hooks'
import { config } from './config'

const feeHistory = await getFeeHistory(config, {
  blockCount: 4,
  rewardPercentiles: [25, 75] // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockNumber

`bigint | undefined`

Highest number block of the requested range.

::: code-group
```ts [index.ts]
import { getFeeHistory } from 'basin-hooks'
import { config } from './config'

const feeHistory = await getFeeHistory(config, {
  blockCount: 4,
  blockNumber: 1551231n, // [!code focus]
  rewardPercentiles: [25, 75],
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### blockTag

`'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | undefined`

Block tag of the highest number block of the requested range.

::: code-group
```ts [index.ts]
import { getFeeHistory } from 'basin-hooks'
import { config } from './config'

const feeHistory = await getFeeHistory(config, {
  blockCount: 4,
  blockTag: 'safe', // [!code focus]
  rewardPercentiles: [25, 75],
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { getFeeHistory } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const feeHistory = await getFeeHistory(config, {
  blockCount: 4,
  chainId: mainnet.id, // [!code focus]
  rewardPercentiles: [25, 75],
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetFeeHistoryReturnType } from 'basin-hooks'
```

[`FeeHistory`](https://viem.sh/docs/glossary/types.html#feehistory)

The fee history.

## Error

```ts
import { type GetFeeHistoryErrorType } from 'basin-hooks'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getFeeHistory`](https://viem.sh/docs/actions/public/getFeeHistory.html)

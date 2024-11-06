<script setup>
const packageName = 'basin-hooks'
const actionName = 'getBlockNumber'
const typeName = 'GetBlockNumber'
</script>

# getBlockNumber

Action for fetching the number of the most recent block seen.

## Import

```ts
import { getBlockNumber } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getBlockNumber } from 'basin-hooks'
import { config } from './config'

const blockNumber = await getBlockNumber(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetBlockNumberParameters } from 'basin-hooks'
```

### cacheTime

`number | undefined`

Time in milliseconds that cached block number will remain in memory.

::: code-group
```ts [index.ts]
import { getBlockNumber } from 'basin-hooks'
import { config } from './config'

const blockNumber = await getBlockNumber(config, {
  cacheTime: 4_000, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { getBlockNumber } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const blockNumber = await getBlockNumber(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetBlockNumberReturnType } from 'basin-hooks'
```

`bigint`

Most recent block number seen.

## Error

```ts
import { type GetBlockNumberErrorType } from 'basin-hooks'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getBlockNumber`](https://viem.sh/docs/actions/public/getBlockNumber.html)
- [`watchBlockNumber`](https://viem.sh/docs/actions/public/watchBlockNumber.html)

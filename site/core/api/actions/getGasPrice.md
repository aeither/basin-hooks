<script setup>
const packageName = 'basin-hooks'
const actionName = 'getGasPrice'
const typeName = 'GetGasPrice'
</script>

# getGasPrice

Action for fetching the current price of gas (in wei).

## Import

```ts
import { getGasPrice } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getGasPrice } from 'basin-hooks'
import { config } from './config'

const gasPrice = await getGasPrice(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetGasPriceParameters } from 'basin-hooks'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when fetching data.

::: code-group
```ts [index.ts]
import { getGasPrice } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const gasPrice = await getGasPrice(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetGasPriceReturnType } from 'basin-hooks'
```

`bigint`

Current price of gas (in wei).

## Error

```ts
import { type GetGasPriceErrorType } from 'basin-hooks'
```

<!--@include: @shared/query-imports.md-->

## Viem

- [`getGasPrice`](https://viem.sh/docs/actions/public/getGasPrice.html)

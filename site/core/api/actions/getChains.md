# getChains

Action for getting configured chains.

## Import

```ts
import { getChains } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getChains } from 'basin-hooks'
import { config } from './config'

const chains = getChains(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetChainsReturnType } from 'basin-hooks'
```

`readonly [Chain, ...Chain[]]`

Chains from [`config.chains`](/core/api/createConfig#chains).

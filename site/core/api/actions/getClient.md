# getClient

Action for getting Viem [`Client`](https://viem.sh/docs/clients/custom.html) instance.

## Import

```ts
import { getClient } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getClient } from 'basin-hooks'
import { config } from './config'

const client = getClient(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetClientParameters } from 'basin-hooks'
```

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use when getting Viem Client.

::: code-group
```ts [index.ts]
import { getClient } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const client = await getClient(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetClientReturnType } from 'basin-hooks'
```

`Client`

Viem [`Client`](https://viem.sh/docs/clients/custom.html) instance.

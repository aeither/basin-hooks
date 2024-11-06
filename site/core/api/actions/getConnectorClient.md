<script setup>
const packageName = 'basin-hooks'
const actionName = 'getConnectorClient'
const typeName = 'GetConnectorClient'
</script>

# getConnectorClient

Action for getting a Viem [`Client`](https://viem.sh/docs/clients/custom.html) object for the current or provided connector.

## Import

```ts
import { getConnectorClient } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getConnectorClient } from 'basin-hooks'
import { config } from './config'

const client = await getConnectorClient(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type GetConnectorClientParameters } from 'basin-hooks'
```

### account

`Address | Account | undefined`

Account to use with client. Throws if account is not found on [`connector`](#connector).

::: code-group
```ts [index.ts]
import { getConnectorClient } from 'basin-hooks'
import { config } from './config'

const client = await getConnectorClient(config, {
  account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to use with client.

::: code-group
```ts [index.ts]
import { getConnectorClient } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const client = await getConnectorClient(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### connector

`Connector | undefined`

- Connector to get client for.
- Defaults to current connector.

::: code-group
```ts [index.ts]
import { getConnections, getConnectorClient } from 'basin-hooks'
import { config } from './config'

const connections = getConnections(config)
const client = await getConnectorClient(config, {
  connector: connections[0]?.connector, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetChainIdReturnType } from 'basin-hooks'
```

`Client`

Viem [`Client`](https://viem.sh/docs/clients/custom.html) object for the current or provided connector.

## Error

```ts
import { type GetConnectorClientErrorType } from 'basin-hooks'
```

<!--@include: @shared/query-imports.md-->

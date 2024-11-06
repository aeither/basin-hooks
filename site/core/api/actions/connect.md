<script setup>
const packageName = 'basin-hooks'
const actionName = 'connect'
const typeName = 'Connect'
</script>

# connect

Action for connecting accounts with [connectors](/core/api/connectors).

## Import

```ts
import { connect } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { connect } from 'basin-hooks'
import { injected } from '@wagmi/connectors'
import { config } from './config'

const result = await connect(config, { connector: injected() })
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type ConnectParameters } from 'basin-hooks'
```

### chainId

`number | undefined`

Chain ID to connect to.

Not all connectors support connecting directly to a `chainId` (e.g. they don't support programmatic chain switching). In those cases, the connector will connect to whatever chain the connector's provider is connected to.

::: code-group
```ts [index.ts]
import { connect } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { injected } from '@wagmi/connectors'
import { config } from './config'

const result = await connect(config, {
  chainId: mainnet.id, // [!code focus]
  connector: injected(),
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### connector

`CreateConnectorFn | Connector`

[Connector](/core/api/connectors) to connect with.

::: code-group
```ts [index.ts]
import { connect } from 'basin-hooks'
import { injected } from '@wagmi/connectors' // [!code focus]
import { config } from './config'

const result = await connect(config, {
  connector: injected(), // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type ConnectReturnType } from 'basin-hooks'
```

### accounts

`readonly [Address, ...Address[]]`

Connected accounts from connector.

### chainId

`number`

Connected chain ID from connector.

## Error

```ts
import { type ConnectErrorType } from 'basin-hooks'
```

<!--@include: @shared/mutation-imports.md-->

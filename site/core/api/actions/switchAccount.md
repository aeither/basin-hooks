<script setup>
const packageName = 'basin-hooks'
const actionName = 'switchAccount'
const typeName = 'SwitchAccount'
</script>

# switchAccount

Action for switching the current account.

## Import

```ts
import { switchAccount } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getConnections, switchAccount } from 'basin-hooks'
import { config } from './config'

const connections = getConnections(config)
const result = await switchAccount(config, {
  connector: connections[0]?.connector,
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type SwitchAccountParameters } from 'basin-hooks'
```

### connector

`Connector`

[Connector](/core/api/connectors) to switch to.

::: code-group
```ts [index.ts]
import { getConnections, switchAccount } from 'basin-hooks'
import { config } from './config'

const connections = getConnections(config)
const result = await switchAccount(config, {
  connector: connections[0]?.connector, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type SwitchAccountReturnType } from 'basin-hooks'
```

### accounts

`readonly [Address, ...Address[]]`
  
Connected accounts from connector.

### chainId

`number`

Connected chain ID from connector.

## Error

```ts
import { type SwitchAccountErrorType } from 'basin-hooks'
```

<!--@include: @shared/mutation-imports.md-->

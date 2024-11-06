<script setup>
const packageName = 'basin-hooks'
const actionName = 'disconnect'
const typeName = 'Disconnect'
</script>

# disconnect

Action for disconnecting connections.

## Import

```ts
import { disconnect } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { disconnect } from 'basin-hooks'
import { config } from './config'

await disconnect(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type DisconnectParameters } from 'basin-hooks'
```

### connector

`Connector | undefined`

[Connector](/core/api/connectors) to disconnect with.

::: code-group
```ts [index.ts]
import { disconnect, getAccount } from 'basin-hooks'
import { config } from './config'

const { connector } = getAccount(config)
const result = await disconnect(config, {
  connector, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Error

```ts
import { type DisconnectErrorType } from 'basin-hooks'
```

<!--@include: @shared/mutation-imports.md-->

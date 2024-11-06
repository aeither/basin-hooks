# getConnections

Action for getting active connections.

## Import

```ts
import { getConnections } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getConnections } from 'basin-hooks'
import { config } from './config'

const connections = getConnections(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetConnectionsReturnType } from 'basin-hooks'
```

[`Connection[]`](/core/api/createConfig#connection)

Active connections.

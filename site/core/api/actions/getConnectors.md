# getConnectors

Action for getting configured connectors.

## Import

```ts
import { getConnectors } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getConnectors } from 'basin-hooks'
import { config } from './config'

const connectors = getConnectors(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetConnectorsReturnType } from 'basin-hooks'
```

`readonly Connector[]`

Connectors from [`config.connectors`](/core/api/createConfig#connectors-1).

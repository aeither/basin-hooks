# watchConnectors

Subscribe to connectors changes.

## Import

```ts
import { watchConnectors } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { watchConnectors } from 'basin-hooks'
import { config } from './config'

const unwatch = watchConnectors(config, {
  onChange(connectors) {
    console.log('Connectors changed!', connectors)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type WatchConnectorsParameters } from 'basin-hooks'
```

### onChange

`onChange(connectors: GetConnectorsReturnType, prevConnectors: GetConnectorsReturnType): void`

Callback function called when connectors changes.

::: code-group
```ts [index.ts]
import { watchConnectors } from 'basin-hooks'
import { config } from './config'

const unwatch = watchConnectors(config, {
  onChange(connectors) { // [!code focus:3]
    console.log('Connectors changed!', connectors)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type WatchConnectorsReturnType } from 'basin-hooks'
```

Function for cleaning up watcher.
# watchConnections

Subscribe to connections changes.

## Import

```ts
import { watchConnections } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { watchConnections } from 'basin-hooks'
import { config } from './config'

const unwatch = watchConnections(config, {
  onChange(data) {
    console.log('Connections changed!', data)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type WatchConnectionsParameters } from 'basin-hooks'
```

### onChange

`onChange(connections: GetConnectionsReturnType, prevConnections: GetConnectionsReturnType): void`

Callback function called when connections changes.

::: code-group
```ts [index.ts]
import { watchConnections } from 'basin-hooks'
import { config } from './config'

const unwatch = watchConnections(config, {
  onChange(data) { // [!code focus:3]
    console.log('Connections changed!', data)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type WatchConnectionsReturnType } from 'basin-hooks'
```

Function for cleaning up watcher.
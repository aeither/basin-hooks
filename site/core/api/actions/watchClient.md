# watchClient

Subscribe to Client changes.

## Import

```ts
import { watchClient } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { watchClient } from 'basin-hooks'
import { config } from './config'

const unwatch = watchClient(config, {
  onChange(client) {
    console.log('Client changed!', client)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type WatchClientParameters } from 'basin-hooks'
```

### onChange

`onChange(client: GetClientReturnType, prevClient: GetClientReturnType): void`

Callback function called when Client changes.

::: code-group
```ts [index.ts]
import { watchClient } from 'basin-hooks'
import { config } from './config'

const unwatch = watchClient(config, {
  onChange(client) { // [!code focus:3]
    console.log('Client changed!', client)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type WatchClientReturnType } from 'basin-hooks'
```

Function for cleaning up watcher.
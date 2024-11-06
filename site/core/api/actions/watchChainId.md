# watchChainId

Subscribe to chain ID changes.

## Import

```ts
import { watchChainId } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { watchChainId } from 'basin-hooks'
import { config } from './config'

const unwatch = watchChainId(config, {
  onChange(chainId) {
    console.log('Chain ID changed!', chainId)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Parameters

```ts
import { type WatchChainIdParameters } from 'basin-hooks'
```

### onChange

`onChange(chainId: GetChainIdReturnType, prevChainId: GetChainIdReturnType): void`

Callback function called when chain ID changes.

::: code-group
```ts [index.ts]
import { watchChainId } from 'basin-hooks'
import { config } from './config'

const unwatch = watchChainId(config, {
  onChange(chainId) { // [!code focus:3]
    console.log('Chain ID changed!', chainId)
  },
})
unwatch()
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type WatchChainIdReturnType } from 'basin-hooks'
```

Function for cleaning up watcher.
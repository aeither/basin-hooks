# getAccount

Action for getting current account.

## Import

```ts
import { getAccount } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { getAccount } from 'basin-hooks'
import { config } from './config'

const account = getAccount(config)
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type GetAccountReturnType } from 'basin-hooks'
```

<!--@include: @shared/getAccount-return-type.md-->

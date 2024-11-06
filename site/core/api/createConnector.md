# createConnector

Creates new [`CreateConnectorFn`](#parameters).

## Import

```ts
import { createConnector } from 'basin-hooks'
```

## Usage

```ts
import { createConnector } from 'basin-hooks'

export type InjectedParameters = {}

export function injected(parameters: InjectedParameters = {}) {
  return createConnector((config) => ({
    // ...
  }))
}
```

## Parameters

```ts
import { type CreateConnectorFn } from 'basin-hooks'
```

Read [Creating Connectors](/dev/creating-connectors) for more info on the `CreateConnectorFn` type.
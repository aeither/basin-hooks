<script setup>
const packageName = 'basin-hooks'
const actionName = 'switchChain'
const typeName = 'SwitchChain'
</script>

# switchChain

Action for switching the target chain for a connector or the Wagmi [`Config`](/core/api/createConfig#config).

## Import

```ts
import { switchChain } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { switchChain } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

await switchChain(config, { chainId: mainnet.id })
```
<<< @/snippets/core/config.ts[config.ts]
:::

::: tip
When connected, `switchChain` will switch the target chain for the connector. When not connected, `switchChain` will switch the target chain for the Wagmi [`Config`](/core/api/createConfig#config).
:::

## Parameters

```ts
import { type SwitchChainParameters } from 'basin-hooks'
```

### addEthereumChainParameter

`{ chainName: string; nativeCurrency?: { name: string; symbol: string; decimals: number } | undefined; rpcUrls: readonly string[]; blockExplorerUrls?: string[] | undefined; iconUrls?: string[] | undefined } | undefined`

[EIP-3085 parameters](https://eips.ethereum.org/EIPS/eip-3085) to use when adding chain to connector (when supported).

::: code-group
```ts [index.ts]
import { switchChain } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const result = await switchChain(config, {
  addEthereumChainParameter: { // [!code focus]
    iconUrls: ['https://example.com/icon.png'], // [!code focus]
  }, // [!code focus]
  chainId: mainnet.id,
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### chainId

`config['chains'][number]['id'] | undefined`

ID of chain to switch to.

::: code-group
```ts [index.ts]
import { switchChain } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const result = await switchChain(config, {
  chainId: mainnet.id, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

### connector

`Connector`

[Connector](/core/api/connectors) to switch chain with.

::: code-group
```ts [index.ts]
import { getConnections, switchAccount } from 'basin-hooks'
import { mainnet } from 'basin-hooks/chains'
import { config } from './config'

const connections = getConnections(config)
const result = await switchChain(config, {
  chainId: mainnet.id,
  connector: connections[0]?.connector, // [!code focus]
})
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type SwitchChainReturnType } from 'basin-hooks'
```

`Chain`

Chain that was switched to.

## Error

```ts
import { type SwitchChainErrorType } from 'basin-hooks'
```

<!--@include: @shared/mutation-imports.md-->

## Viem

- [`switchChain`](https://viem.sh/docs/actions/wallet/switchChain.html) when connected.

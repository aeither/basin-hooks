<script setup>
const packageName = 'basin-hooks'
const actionName = 'deployContract'
const typeName = 'DeployContract'
</script>

# deployContract <Badge text="viem@>=2.8.18" />

Action for deploying a contract to the network, given bytecode, and constructor arguments.

## Import

```ts
import { deployContract } from 'basin-hooks'
```

## Usage

::: code-group
```ts [index.ts]
import { deployContract } from 'basin-hooks'
import { wagmiAbi } from './abi'
import { config } from './config'

const result = await deployContract(config, {
  abi: wagmiAbi,
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```
```ts [abi.ts]
export const wagmiAbi = [
  ...
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  ...
] as const
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Deploying with Constructor Args

::: code-group
```ts [index.ts]
import { deployContract } from 'basin-hooks'
import { wagmiAbi } from './abi'
import { config } from './config'

const result = await deployContract(config, {
  abi: wagmiAbi,
  args: [69420],
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```
```ts [abi.ts]
export const wagmiAbi = [
  ...
  {
    inputs: [{ name: "x", type: "uint32" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  ...
] as const;
```
<<< @/snippets/core/config.ts[config.ts]
:::


## Parameters

```ts
import { type DeployContractParameters } from 'basin-hooks'
```

### abi

`Abi`

The contract's ABI.

::: code-group
```ts [index.ts]
import { deployContract } from 'basin-hooks'
import { wagmiAbi } from './abi'
import { config } from './config'

const result = await deployContract(config, {
  abi: wagmiAbi, // [!code focus]
  args: [69420],
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```
```ts [abi.ts]
export const wagmiAbi = [
  ...
  {
    inputs: [{ name: "x", type: "uint32" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  ...
] as const;
```
<<< @/snippets/core/config.ts[config.ts]
:::

### account

`Address | Account | undefined`

Account to use when deploying a contract. Throws if account is not found on [`connector`](#connector).

::: code-group
```ts [index.ts]
import { deployContract } from 'basin-hooks'
import { wagmiAbi } from './abi'
import { config } from './config'

const result = await deployContract(config, {
  abi: wagmiAbi,
  account: '0xd2135CfB216b74109775236E36d4b433F1DF507B', // [!code focus]
  args: [69420],
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```
```ts [abi.ts]
export const wagmiAbi = [
  ...
  {
    inputs: [{ name: "x", type: "uint32" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  ...
] as const;
```
<<< @/snippets/core/config.ts[config.ts]
:::

### args

`readonly unknown[] | undefined`

- Arguments to pass when deploying the contract.
- Inferred from [`abi`](#abi).

::: code-group
```ts [index.ts]
import { deployContract } from 'basin-hooks'
import { wagmiAbi } from './abi'
import { config } from './config'

const result = await deployContract(config, {
  abi: wagmiAbi,
  args: [69420], // [!code focus]
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```
```ts [abi.ts]
export const wagmiAbi = [
  ...
  {
    inputs: [{ name: "x", type: "uint32" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  ...
] as const;
```
<<< @/snippets/core/config.ts[config.ts]
:::

### bytecode

`Hex`

The contract's bytecode.

::: code-group
```ts [index.ts]
import { deployContract } from 'basin-hooks'
import { wagmiAbi } from './abi'
import { config } from './config'

const result = await deployContract(config, {
  abi: wagmiAbi,
  args: [69420],
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...', // [!code focus]
})
```
```ts [abi.ts]
export const wagmiAbi = [
  ...
  {
    inputs: [{ name: "x", type: "uint32" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  ...
] as const;
```
<<< @/snippets/core/config.ts[config.ts]
:::

### connector

`Connector | undefined`

- Connector to use when deploying a contract.
- Defaults to current connector.

::: code-group
```ts [index.ts]
import { getAccount, deployContract } from 'basin-hooks'
import { wagmiAbi } from './abi'
import { config } from './config'

const { connector } = getAccount(config)
const result = await deployContract(config, {
  abi: wagmiAbi,
  args: [69420],
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
  connector, // [!code focus]
})
```
```ts [abi.ts]
export const wagmiAbi = [
  ...
  {
    inputs: [{ name: "x", type: "uint32" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  ...
] as const;
```
<<< @/snippets/core/config.ts[config.ts]
:::

## Return Type

```ts
import { type DeployContractReturnType } from 'basin-hooks'
```

[`Hash`](https://viem.sh/docs/glossary/types.html#hash)

Transaction hash.

## Error

```ts
import { type DeployContractErrorType } from 'basin-hooks'
```

<!--@include: @shared/mutation-imports.md-->

## Viem

- [`deployContract`](https://viem.sh/docs/contract/deployContract)

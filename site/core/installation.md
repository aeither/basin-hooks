<script setup>
import packageJson from '../../packages/core/package.json'
import Browsers from '../components/Browsers.vue'

const docsPath = 'core'
const packageDir = 'core'
const packageName = 'basin-hooks'
const viemVersion = packageJson.peerDependencies.viem
</script>

# Installation

Install Wagmi Core via your package manager, a `<script>` tag, or build from source.

## Package Manager

Install the required packages.

::: code-group
```bash-vue [pnpm]
pnpm add basin-hooks viem@{{viemVersion}}
```

```bash-vue [npm]
npm install basin-hooks viem@{{viemVersion}}
```

```bash-vue [yarn]
yarn add basin-hooks viem@{{viemVersion}}
```

```bash-vue [bun]
bun add basin-hooks viem@{{viemVersion}}
```
:::

- [Viem](https://viem.sh) is a TypeScript interface for Ethereum that performs blockchain operations.
- [TypeScript](/react/typescript) is optional, but highly recommended. Learn more about [TypeScript support](/react/typescript).

## CDN

If you're not using a package manager, you can also use Wagmi Core via an ESM-compatible CDN such as [esm.sh](https://esm.sh). Simply add a `<script type="module">` tag to the bottom of your HTML file with the following content.

```html-vue
<script type="module">
  import { createClient } from 'https://esm.sh/viem'
  import { createConfig } from 'https://esm.sh/basin-hooks@{{viemVersion}}'
  import { injected } from 'https://esm.sh/@wagmi/connectors'
</script>
```

<!--@include: @shared/installation.md-->

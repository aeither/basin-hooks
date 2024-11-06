
## Publish to NPM

update the version in /packages/core/package.json

```bash
pnpm publish packages/core --access public --no-git-checks
```

## Installing dependencies

Installing dependencies with filter by name

```bash
pnpm add @babylonlabs-io/btc-staking-ts --filter wagmi
```

## Troubleshooting


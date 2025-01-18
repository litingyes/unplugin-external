# unplugin-external

External dependencies when building

## Installation

```bash
pnpm add unplugin-external
```

## Usage

> [!TIP]
> Thanks to [unplugin](https://unplugin.unjs.io/), it can be used in multiple build packagers, e.g. vite/rollup/webpack/esbuild/rspack/rolldown

```ts
import External from 'unplugin-external/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [External(options)]
})
```

## Options

```ts
export interface Options {
  /**
   * exclude node builtin modules, e.g. node:os
   *
   * default: true
   */
  nodeBuiltins?: boolean

  /**
   * current working directory to get package.json data
   *
   * default: process.cwd()
   */
  cwd?: string

  /**
   * exclude dependencies
   *
   * default: true
   */
  deps?: boolean

  /**
   * exclude devDependencies
   *
   * default: false
   */
  devDeps?: boolean

  /**
   * exclude peerDependencies
   *
   * default: true
   */
  peerDeps?: boolean

  /**
   * exclude peerDependencies
   *
   * default: true
   */
  optDeps?: boolean

  /**
   * Customizing additional exclusion logic
   */
  custom?: (string | RegExp)[] | string | RegExp | ((id: string) => boolean)
}
```

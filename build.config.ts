import { resolve } from 'node:path'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/esm',
      format: 'esm',
      ext: 'js',
    },
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/cjs',
      format: 'cjs',
      ext: 'cjs',
    },
  ],
  declaration: true,
  alias: {
    '@': resolve(__dirname, './src'),
  },
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    cjsBridge: true,
  },
  clean: true,
})

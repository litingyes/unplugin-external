import type { UnpluginFactory } from 'unplugin'
import type { Options } from './types'
import { cwd } from 'node:process'
import { createUnplugin } from 'unplugin'
import { isArray, isFunction, isRegExp, merge } from 'usexx'
import { getPkgInfo } from './utils'

export const DEFAULT_OPTIONS: Options = {
  nodeBuiltins: true,
  cwd: cwd(),
  deps: false,
  devDeps: true,
  peerDeps: true,
}

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options) => {
  const { nodeBuiltins, cwd, deps, devDeps, peerDeps, optDeps, custom } = merge(DEFAULT_OPTIONS, options) as Required<Options>
  const pkgInfo = getPkgInfo(cwd)

  return {
    name: 'unplugin-external',
    enforce: 'pre',
    resolveId(id) {
      if (nodeBuiltins) {
        if (id.startsWith('node:')) {
          return {
            id,
            external: true,
          }
        }
      }

      if (deps && Object.keys(pkgInfo?.dependencies ?? {})?.includes(id)) {
        return {
          id,
          external: true,
        }
      }

      if (devDeps && Object.keys(pkgInfo?.devDependencies ?? {})?.includes(id)) {
        return {
          id,
          external: true,
        }
      }

      if (peerDeps && Object.keys(pkgInfo?.peerDependencies ?? {})?.includes(id)) {
        return {
          id,
          external: true,
        }
      }

      if (optDeps && Object.keys(pkgInfo?.optionalDependencies ?? {})?.includes(id)) {
        return {
          id,
          external: true,
        }
      }

      if (custom) {
        if (isFunction(custom)) {
          if (custom(id)) {
            return {
              id,
              external: true,
            }
          }
        }
        else {
          const ids = isArray(custom) ? custom : [custom]

          if (ids.some(item => isRegExp(item) ? item.test(id) : item === id)) {
            return {
              id,
              external: true,
            }
          }
        }
      }
    },
  }
}

export const unplugin = createUnplugin(unpluginFactory)

export default unplugin

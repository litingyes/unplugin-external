import type { PackageJson } from 'pkg-types'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { cwd } from 'node:process'

export function getPkgInfo(dir: string = cwd()): PackageJson | null {
  const packageJsonPath = resolve(dir, 'package.json')

  if (!existsSync(packageJsonPath)) {
    return null
  }

  const data = readFileSync(packageJsonPath, 'utf-8')
  try {
    return JSON.parse(data) as PackageJson
  }
  catch (_) {
    return null
  }
}

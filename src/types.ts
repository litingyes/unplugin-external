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
   * default: false
   */
  deps?: boolean

  /**
   * exclude devDependencies
   *
   * default: true
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

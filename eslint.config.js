import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  ignores: ['./pnpm-lock.yaml'],
  rules: {
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
})

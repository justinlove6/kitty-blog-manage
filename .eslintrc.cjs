/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'airbnb-base',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.*.json'
      }
    }
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
    ],
    'import/prefer-default-export': 0,
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
          'type',
          'object',
          'unknown'
        ],
        pathGroups: [
          {
            pattern: '../**',
            group: 'parent',
            position: 'after'
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after'
          }
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'vue/multi-word-component-names': 0,
    'no-return-assign': 0
  }
}

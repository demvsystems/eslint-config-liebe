module.exports = {
  extends: ['plugin:vue/vue3-recommended'],
  rules: {
    'vue/padding-line-between-blocks': 'error',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'always',
      },
    ],
    'vue/prop-name-casing': 'error',
    'vue/script-indent': ['error', 2],
    'vue/multi-word-component-names': 'off',
    /**
     * We should never use the name: property in vue files
     * as we should rather order and name files correctly
     * naming components differently is just confusing
     */
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
      shouldMatchCase: true,
    }],
    'vue/no-mutating-props': 'warn',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: 'tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

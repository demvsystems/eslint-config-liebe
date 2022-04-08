const { configs } = require('.');

module.exports = {
  ...configs.all,
  rules: {
    /**
      * doesnt make sense in this project
      * because node isnt importing modules
    * */
    'unicorn/prefer-module': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

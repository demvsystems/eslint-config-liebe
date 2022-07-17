module.exports = {
  extends: './index',
  rules: {
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

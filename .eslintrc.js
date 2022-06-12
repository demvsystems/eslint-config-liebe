module.exports = {
  extends: './index.js',
  rules: {
    'unicorn/prefer-module': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.json', '.js'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

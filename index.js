module.exports = {
  extends: ['./exports/all.js'],
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'project': 'tsconfig.json',
    'extraFileExtensions:': ['.json'],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

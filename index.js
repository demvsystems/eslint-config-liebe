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
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {},
};

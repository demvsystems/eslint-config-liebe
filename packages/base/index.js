module.exports = {
  extends: [
    // plugins
    './rules/eslintComments',
    './rules/simpleImportSort',
    // extends
    './rules/promise',
    './rules/base',
    './rules/import',
    './rules/typescriptEslint',
    './rules/unicorn',
    './rules/sonarjs',
    './rules/json',
    // TODO: extract testing config
    './rules/jest',
  ],
  rules: {},
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    jest: true,
    node: true,
  },
};

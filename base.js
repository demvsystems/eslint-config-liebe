const environment = require('./enviroment');

module.exports = {
  extends: [
    // plugins
    './rules/eslintComments.js',
    './rules/simpleImportSort.js',
    // extends
    './rules/promise.js',
    './rules/base.js',
    './rules/import.js',
    './rules/typescriptEslint.js',
    './rules/unicorn.js',
    './rules/sonarjs.js',
    './rules/json.js',
  ].map((extend) => require.resolve(extend)),
  rules: {},
  env: environment,
};

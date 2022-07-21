const environment = require('./enviroment');

module.exports = {
  extends: [
    // plugins
    './rules/eslintComments',
    './rules/simpleImportSort',
    // extends
    './rules/promise',
    './rules/base',
    './rules/import',
    './rules/unicorn',
    './rules/sonarjs',
    './rules/json',
    './rules/jest',
  ],
  env: environment,
};

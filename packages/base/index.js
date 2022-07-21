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
    // TODO: extract testing cfg
    './rules/jest',
  ],
  env: environment,
};

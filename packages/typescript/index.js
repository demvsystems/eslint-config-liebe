const environment = require('./enviroment');

module.exports = {
  extends: [
    './rules/base',
    './rules/import',
    './rules/typescriptEslint',
  ],
  env: environment,
  parserOptions: {
    project: 'tsconfig/base.json',
  },
};

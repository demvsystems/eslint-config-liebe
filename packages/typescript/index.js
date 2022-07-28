const environment = require('./enviroment');

module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: [
    './rules/base',
    './rules/import',
    './rules/typescriptEslint',
  ],
  env: environment,
};

const env = require('environment');

module.exports = {
  extends: [
    './rules/base',
    './rules/import',
    './rules/typescriptEslint',
  ],
  env,
  parserOptions: {
    project: 'tsconfig/base.json',
  },
};

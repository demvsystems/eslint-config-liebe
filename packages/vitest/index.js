const environment = require('./enviroment');

module.exports = {
  extends: [
    './rules/vitest',
  ],
  env: environment,
};

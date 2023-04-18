const environment = require('./enviroment');

module.exports = {
  extends: [
    './rules/jest',
  ],
  env: environment,
};

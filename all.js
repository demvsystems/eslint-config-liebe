const environment = require('./enviroment');

module.exports = {
  extends: [
    './base.js',
    './testing.js',
  ],
  rules: {},
  env: environment,
};

const environment = require('./enviroment');

module.exports = {
  extends: [
    './rules/jest.js',
  ].map((extend) => require.resolve(extend)),
  rules: {},
  env: environment,
};

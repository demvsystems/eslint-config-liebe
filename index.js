const environment = {
  browser: true,
  es6: true,
  commonjs: true,
  jest: true,
  node: true,
};

module.exports = {
  all: {
    extends: './exports/all.js',
    env: environment,
  },

  base: {
    extends: './exports/base.js',
    env: environment,
  },

  testing: {
    extends: './exports/testing.js',
    env: environment,
  },
};

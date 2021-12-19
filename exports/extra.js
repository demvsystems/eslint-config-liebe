module.exports = {
  extends: [
    '../rules/you-dont-need-lodash-underscore.js',
  ].map(require.resolve),
  rules: {},
};

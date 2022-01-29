module.exports = {
  extends: [
    '../rules/jest.js',
  ].map((extend) => require.resolve(extend)),
  rules: {},
};

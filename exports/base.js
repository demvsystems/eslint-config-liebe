module.exports = {
  extends: [
    // plugins
    '../rules/eslint-comments.js',
    '../rules/simple-import-sort.js',
    // extends
    '../rules/promise.js',
    '../rules/import.js',
    '../rules/base.js',
    '../rules/typescript-eslint.js',
    '../rules/unicorn.js',
    '../rules/sonarjs.js',
  ].map(require.resolve),
  rules: {},
};

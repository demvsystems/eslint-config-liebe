module.exports = {
  extends: [
    // plugins
    '../rules/eslintComments.js',
    '../rules/simpleImportSort.js',
    '../rules/editorconfig.js',
    // extends
    '../rules/promise.js',
    '../rules/import.js',
    '../rules/base.js',
    '../rules/typescriptEslint.js',
    '../rules/unicorn.js',
    '../rules/sonarjs.js',
    '../rules/json.js',
  ].map((extend) => require.resolve(extend)),
  rules: {},
};

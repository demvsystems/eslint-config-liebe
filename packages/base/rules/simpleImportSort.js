module.exports = {
  plugins: [
    'simple-import-sort',
  ],
  rules: {
    // turns on sorting for module imports
    // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/src/imports.js
    'simple-import-sort/imports': 'error',

    // turns on sorting for module exports
    // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/src/exports.js
    'simple-import-sort/exports': 'error',
  },
};

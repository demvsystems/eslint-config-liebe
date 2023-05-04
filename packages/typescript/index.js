module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: [
    './configs/base',
    './configs/import',
    './configs/typescriptEslint',
  ],
};

module.exports = {
  extends: [
    'plugin:sonarjs/recommended',
  ],
  overrides: [
    {
      files: ['**.md', '**.json', '**.spec.{js,ts}'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
  rules: {
    // we found it to intrusive to instantly rewrite a method
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md
    'sonarjs/cognitive-complexity': ['warn', 20],

    // make it less of a chore and more like a proposal to change it
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md
    'sonarjs/no-duplicate-string': 'warn',
  },
};

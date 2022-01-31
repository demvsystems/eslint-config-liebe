module.exports = {
  plugins: [
    'sonarjs',
  ],
  extends: [
    'plugin:sonarjs/recommended',
  ],
  overrides: [
    {
      files: ['**.md', '**.json'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
  rules: {
    // we found it to intrusive to instandly rewrite a method
    // https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md
    'sonarjs/cognitive-complexity': 'warn',
  },
};

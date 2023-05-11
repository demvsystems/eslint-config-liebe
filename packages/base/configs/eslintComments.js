module.exports = {
  extends: [
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    // Disabled as it's already covered by the `unicorn/no-abusive-eslint-disable` rule.
    'eslint-comments/no-unlimited-disable': 'off',
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
  },
};

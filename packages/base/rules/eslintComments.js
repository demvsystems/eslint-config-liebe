module.exports = {
  plugins: [
    'eslint-comments',
  ],
  rules: {
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],

    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',

    // Disabled as it's already covered by the `unicorn/no-abusive-eslint-disable` rule.
    // 'eslint-comments/no-unlimited-disable': 'error',

    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
  },
};

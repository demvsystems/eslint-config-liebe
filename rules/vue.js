module.exports = {
  plugins: [
    'vue',
  ],
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/padding-line-between-blocks': ['error'],

    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'always',
      },
    ],

    'vue/prop-name-casing': 'error',

    'vue/script-indent': ['error', 2],

    'vue/multi-word-component-names': 'warn',

    // 'v-html' directive can lead to XSS attack.
    'vue/no-v-html': 'error',

    /**
     * We should never use the name: property in vue files
     * as we should rather order and name files correctly
     * naming components differently is just confusing
     */
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
      shouldMatchCase: true,
    }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/script-indent': 'off',
      },
    },
  ],
};
module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  rules: {
    // use @typescript-eslint/ident instead
    // 'indent': 'off',

    // forces quotes around nearly everything, but keeps the option of writing numbers as object keys
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'consistent-as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // disallow usage outside of loops for an easier unstanding of the code
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // increases the max length of a line to 120 which seems more reasonable and ignores urls
    // https://eslint.org/docs/rules/max-len
    'max-len': ['error', { code: 120, ignoreUrls: true }],

    // this just seems to be a legacy rule, disable it to force good variable names
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'error',

    // disable because its handled by simple-import-sort
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',

    // assignments on function parameters seem to be a really bad practise as it can create weird behavior
    // we enabled it for commonly used names in Array.reduce() tho, so we can still write it in a short way
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'accumulator',
          'context',
          'props',
          'ctx',
          'acc',
          'current',
          'cur',
        ],
      },
    ],

    // disallow declaration of variables that are not used in the code
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: 'rest|^_|_',
        varsIgnorePattern: '_',
        ignoreRestSiblings: true,
      },
    ],

    // we dont want to disallow this rule because the code is way cleaner
    // however we would still advice to avoid this syntax
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'warn',

    // too restrictive, writing ugly code to defend against a very unlikely scenario
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',

    // use function hoisting to improve code readability
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],

    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',
  },
};

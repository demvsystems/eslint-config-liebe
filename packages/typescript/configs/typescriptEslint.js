module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: 'rest|^_|_',
        varsIgnorePattern: '_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-nocheck': 'allow-with-description',
        'minimumDescriptionLength': 5,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['enum', 'enumMember'],
        format: ['UPPER_CASE'],
      },
    ],
    // allow most functions to rely on type inference.
    // if the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false, classes: true, variables: true, typedefs: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};

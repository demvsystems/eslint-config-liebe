module.exports = {
  extends: [
    'plugin:import/recommended',
  ],
  rules: {
    // disable because its handled by simple-import-sort
    'import/order': 'off',

    'import/no-anonymous-default-export': ['error', { allowObject: true }],

    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
        // TypeScript doesn't yet support using extensions and fails with error TS2691.
        pattern: {
          vue: 'always',
          json: 'always',
        },
      },
    ],

    /**
     * We recommend you do not use the following rules, as TypeScript
     * provides the same checks as part of standard type checking
     * source: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
     * Other rules are already in the airbnb-base
     */
    'import/named': 'off',
    'import/no-named-as-default-member': 'off',

    // we agree with the opinion of basarat that the discoverability is poor
    // https://basarat.gitbook.io/typescript/main-1/defaultisbad
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    // we would prefer named exports over namespace exports
    // TODO: extract into different config due to bad performance
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    'import/namespace': 'off',

    // forbid cyclical dependencies between modules
    // TODO: extract into different config due to bad performance
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
    'import/no-cycle': [
      'off',
      {
        ignoreExternal: true,
        maxDepth: '∞',
      },
    ],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        // Reports if a module's default export is unnamed
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
};

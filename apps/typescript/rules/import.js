module.exports = {
  extends: [
    'plugin:import/typescript',
  ],
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        // Reports if a module's default export is unnamed
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
        'import/no-anonymous-default-export': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
};

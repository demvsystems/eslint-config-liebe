module.exports = {
  plugins: [
    'eslint-plugin-unicorn',
  ],
  extends: [
    'plugin:unicorn/recommended',
  ],
  rules: {
    // we want a consistent way of casing our files, camelCase and pascalCase seem to be the most common casetypes
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],

    // this seems pretty dumb as methods have their unique purpose.
    // getElementById for example is more performant then using querySelector to get the id
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'off',

    // this will lead to problems because you have to do extra configuration for no noticeable benefit
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
    'unicorn/prefer-node-protocol': 'off',

    // its not an option to disable this as its commonly used.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
    'unicorn/no-array-reduce': 'off',

    // Airbnb prefers forEach, and its good that we dont have to include regenerator-runtime
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-for-each.md
    'unicorn/no-array-for-each': 'off',

    // this is really good as its even faster and gives you more readable code.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-replace-all.md
    'unicorn/prefer-string-replace-all': 'error',

    // this is an even shorter way to import the index file with no real downsides
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-index.md
    'unicorn/import-index': 'error',

    // alot of php orientated stack heavily use null so this is no option for us
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    'unicorn/no-null': 'off',

    // its a very consistent way of seperating the purpose of the variable
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
    'unicorn/no-keyword-prefix': 'error',

    // we shouldnt enforce it as an error but we should atleast warn to maybe refactor affected statements
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unsafe-regex.md
    'unicorn/no-unsafe-regex': 'warn',

    // we should warn about it but we shouldnt instandly throw an error to break the code
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-properties.md
    'unicorn/no-unused-properties': 'warn',

    // we only enforce it for single-line statements
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
    'unicorn/prefer-ternary': [
      'error',
      'only-single-line',
    ],

    // we dont know if this covers every case, so we make it a warning to be safe
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-object-from-entries.md
    'unicorn/prefer-object-from-entries': 'warn',

    // it doesnt make sense to disallow the usage of the most performant looping method
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'off',

    // more words to ease users into readable variable names.
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          // https://thenextweb.com/dd/2020/07/13/linux-kernel-will-no-longer-use-terms-blacklist-and-slave/
          whitelist: {
            allowList: true,
          },
          blacklist: {
            denyList: true,
          },
          master: {
            main: true,
          },
          slave: {
            secondary: true,
          },

          // some common words
          application: {
            app: true,
          },
          applications: {
            apps: true,
          },

          i: false,

          // props is a commonly used word in vue terminology
          props: false,
          prop: false,
        },
      },
    ],
  },
};

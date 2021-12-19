module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat', // Introducing new features
      'fix', // Fixing a bug
      'refactor', // Refactoring code (Not Introducing features or fix)
      'docs', // add documents
      'test', // Adding unit tests or e2e test
      'perf', // Improving performance
      'revert', // Reverting changes or commits
      'style', // Updating the UI and style files
      'build', // build artifacts
      'ci', // working about CI build system
      'wip', // Work in progress
      'chore', // Work with configuration or other stuff
    ]],
  },
};

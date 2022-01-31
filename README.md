# ESlint config liebe [![npm version](https://badge.fury.io/js/eslint-config-liebe.svg)][package-url] [![License][license-image]][license-url]

*A config by the 'team liebe' or 'team love' :heartpulse: in english that lets you love your code by lending you a hand with powerful lints.*

## Whats included?
*the configuration is splitted into logical components so that you only have to include the things you need.*

### liebe/base
- eslint-config-airbnb-base
- eslint-config-airbnb-typescript
- eslint-import-resolver-typescript
- eslint-plugin-eslint-comments
- eslint-plugin-import
- eslint-plugin-simple-import-sort
- eslint-plugin-unicorn
- eslint-plugin-promise
- eslint-plugin-json
- eslint-plugin-editorconfig

### liebe/testing
- eslint-plugin-jest

### liebe/all
- **Includes all the mentioned above**

## Installation
```sh
npm i -D eslint-config-liebe@latest

or

yarn add -D eslint-config-liebe@latest
```

after that you have to install all the peerDependencies of this package by using:
```sh
npx install-peerdeps --dev eslint-config-liebe

or list them by using

npm info "eslint-config-liebe@latest" peerDependencies
```

## Usage

Include the configs you need in your .eslintrc:
```.eslintrc.js
  extends: [
    'liebe/base',
    'liebe/testing',
  ],
```

or just

```.eslintrc.js
  extends: [
    'liebe/all',
  ],
```

## Changelog
Please look at [CHANGELOG](CHANGELOG.md) or [Releases](https://github.com/Tjark-Kuehl/eslint-config-liebe/releases) for information on what has changed recently.

## License
The ISC License (ISC). Please see [LICENSE](LICENSE) for more information.

[package-url]: https://npmjs.org/package/eslint-config-liebe
[license-image]: https://img.shields.io/npm/l/eslint-config-liebe.svg
[license-url]: LICENSE

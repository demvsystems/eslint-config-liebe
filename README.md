# ESlint config liebe <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

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

### liebe/testing
- eslint-plugin-jest

### liebe/vue
- eslint-plugin-vue

### liebe/extra
- eslint-plugin-you-dont-need-lodash-underscore

### liebe/all
- **Includes all the mentioned above**

## Installation
```sh
npm i -D eslint-config-liebe@latest
```
or
```sh
yarn add -D eslint-config-liebe@latest
```

## Usage

Include the configs you need in your .eslintrc:
```.eslintrc.js
  extends: [
    'liebe/base',
    'liebe/testing',
    'liebe/vue',
    'liebe/extra',
  ],
```

or just

```.eslintrc.js
  extends: [
    'liebe/all',
  ],
```

## Changelog
Please look at [the releases](https://github.com/Tjark-Kuehl/eslint-config-liebe/releases) for more information on what has changed recently.

## License
The ISC License (ISC). Please see [License File](LICENSE.md) for more information.
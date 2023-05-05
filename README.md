# ESlint config liebe [![npm version](https://badge.fury.io/js/eslint-config-liebe.svg)][package-url] [![License][license-image]][license-url]

*A config by the 'team liebe' or 'team love' :heartpulse: in english that lets you love your code by lending you a hand with powerful lints.*

## Whats included?
*the configuration is splitted into logical components so that you only have to include the things you need.*

  - @eslint-config-liebe/eslint-config-base
  - @eslint-config-liebe/eslint-config-jest
  - @eslint-config-liebe/eslint-config-vitest
  - @eslint-config-liebe/eslint-config-typescript
  - @eslint-config-liebe/eslint-config-vue


## Installation
In order to work around [a known limitation in ESLint](https://github.com/eslint/eslint/issues/3458), we recommend you to use this package alongside `@rushstack/eslint-patch`, so that you don't have to install too many dependencies:
```sh
npm i -D @rushstack/eslint-patch
```

Eslint configs are installed with:

```shell
npm i -D @eslint-config-liebe/eslint-config-base
npm i -D @eslint-config-liebe/eslint-config-jest
npm i -D @eslint-config-liebe/eslint-config-vitest
npm i -D @eslint-config-liebe/eslint-config-typescript
npm i -D @eslint-config-liebe/eslint-config-vue
```

## Usage

Include the configs you need in your `.eslintrc` and link your local `tsconfig.json` in case of typescript. The order is important!
```.eslintrc.js
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: [
    '@eslint-config-liebe/base',
    // '@eslint-config-liebe/jest',
    '@eslint-config-liebe/vitest',
    '@eslint-config-liebe/typescript',
    '@eslint-config-liebe/vue',
  ],
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
  },
}
```

Extend a tsconfig from either
- @eslint-config-liebe/eslint-config-typescript
- @eslint-config-liebe/eslint-config-vue

in your local `tsconfig.json`. `include`, `types`, `paths` and `baseUrl` are common properties which should be individually set.

```tsconfig.json
{
  "extends": "./node_modules/@eslint-config-liebe/eslint-config-typescript/tsconfig.json",
  "compilerOptions": {
    "baseUrl": "./resources/js",
    "paths": {
      "@/*": [
        "*"
      ]
    },
    "types": [
      "node",
      "vitest/globals",
      "vite/client",
    ],
  },
  "include": [
    "resources/mix/*.js",
    "resources/js/**/*.js",
    "resources/js/**/*.ts",
    "resources/js/**/*.vue"
  ]
}

```

## Local development in other projects

[yalc](https://github.com/wclr/yalc) can add your current state of `eslint-config-liebe` in another project to be tested there.

In `eslint-config-liebe` project root run:

```shell
yalc publish package/base
yalc publish package/jest
yalc publish package/vitest
yalc publish package/typescript
yalc publish package/vue
```

In any local project root run to copy the package:

```shell
yalc add @eslint-config-liebe/eslint-config-base@1.0.0
yalc add @eslint-config-liebe/eslint-config-jest@1.0.0
yalc add @eslint-config-liebe/eslint-config-vitest@1.0.0
yalc add @eslint-config-liebe/eslint-config-typescript@1.0.0
yalc add @eslint-config-liebe/eslint-config-vue@1.0.0
```

You may run to install the added packages' dependencies:

```shell
npm i # or similar
```

Instead of `yalc add` there is `yalc link` to add a symbolic link rather then copying the package files.

## Changelog
Please look at [CHANGELOG](CHANGELOG.md) or [Releases](https://github.com/Tjark-Kuehl/eslint-config-liebe/releases) for information on what has changed recently.

## License
The ISC License (ISC). Please see [LICENSE](LICENSE) for more information.

[package-url]: https://npmjs.org/package/eslint-config-liebe
[license-image]: https://img.shields.io/npm/l/eslint-config-liebe.svg
[license-url]: LICENSE

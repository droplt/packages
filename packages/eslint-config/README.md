<h1 align="center">@droplt/eslint-config</h1>

[**ESlint**](https://github.com/eslint/eslint) shareable config for droplt.

- [Install](#install)
- [Usage](#usage)

## Install

```bash
yarn add eslint @droplt/eslint-config -D
```

## Usage

The shareable config can be configured via the [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring):

- A `.eslintrc.*` file, written in YAML or JSON, with optional extensions: `.yaml`/`.yml`/`.json`/`.js`
- A `eslint.config.js` file that exports an object
- A `eslintConfig` key in the project's `package.json` file

```js
// .eslintrc.js
module.exports = {
  extends: ['@droplt']
}
```

```js
// package.json
{
  ...
  "release": {
    "extends": "@droplt"
  }
}
```

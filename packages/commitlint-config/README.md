<h1 align="center">@droplt/commitlint-config</h1>

[**Commitlint**](https://github.com/conventional-changelog/commitlint#readme) shareable config for droplt.

- [Install](#install)
- [Configuration](#configuration)
- [Usage](#usage)

## Install

```bash
$ yarn add @commitlint/cli @droplt/commitlint-config -D
```

## Configuration

This shareable configuration extends the `conventional commit` configuration:
- [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

See documentation for required installation and configuration steps.

## Usage

The shareable config can be configured via the [**commitlint** configuration file](https://github.com/conventional-changelog/commitlint#config):

- A `.commitlintrc` file, written in JS or YML, with optional extensions: `.js`/`.yml`
- A `commitlint.config.js` file that exports an object
- A `commitlint` key in the project's `package.json` file

```js
// .commitlintrc.js
module.exports = {
  extends: '@droplt'
}
```

```js
// package.json
{
  ...
  "commitlint": {
    "extends": "@droplt"
  }
}
```

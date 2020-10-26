<h1 align="center">@droplt/semantic-release-config</h1>

[**Semantic-release**](https://github.com/semantic-release/semantic-release) shareable config for droplt.

- [Workflow](#workflow)
- [Plugins](#plugins)
- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)
  - [Run NPM script before release](#run-npm-script-before-release)

## Workflow

This shareable configuration use the [`conventional-changelog-conventionalcommits`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits) preset ([conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)).

See the list of commits **types** and their impact on **version bump**, **changelog** generation and **release trigger**.

| Commit Type |  Trigger release   |      Version Bump      | Changelog Section            | Changelog Visibility |
| ----------- | :----------------: | :--------------------: | ---------------------------- | :------------------: |
| `build`     |         ✅         |  patch (_v0.0._**1**)  | **Build System**             |          ❌          |
| `ci`        |         ✅         |  patch (_v0.0._**1**)  | **Continuous Integration**   |          ❌          |
| `chore`     |         ❌         |           -            | **Miscellaneous Chores**     |          ❌          |
| `docs`      |         ❌         |           -            | **Documentation**            |          ❌          |
| `feat`      |         ✅         | minor (_v0._**1**_.0_) | **Features**                 |          ✅          |
| `fix`       |         ✅         |  patch (_v0.0._**1**)  | **Bug Fixes**                |          ✅          |
| `perf`      |         ✅         |  patch (_v0.0._**1**)  | **Performance Improvements** |          ✅          |
| `refactor`  |         ❌         |           -            | **Code Refactoring**         |          ❌          |
| `revert`    |         ❌         |           -            | **Reverts**                  |          ✅          |
| `style`     |         ❌         |           -            | **Styles**                   |          ❌          |
| `test`      |         ❌         |           -            | **Tests**                    |          ❌          |

A special behavior for `BREAKING CHANGE` commits:

| Commit                                                                       |  Trigger release   |      Version Bump      | Changelog Section              | Changelog Visibility |
| ---------------------------------------------------------------------------- | :----------------: | :--------------------: | ------------------------------ | :------------------: |
| `chore(scope)!: commit message`                                              |         ✅         | major (_v_**1**_.0.0_) | **⚠️ BREAKING CHANGES**        |          ✅          |
| `perf(scope): commit message`<br /><br />`BREAKING CHANGE: breaking message` |         ✅         | major (_v_**1**_.0.0_) | **⚠️ BREAKING CHANGES**        |          ✅          |

## Plugins

This shareable configuration comes with the following **plugins** installed:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/exec`](https://github.com/semantic-release/exec)

See each documentation for required installation and configuration steps.

## Install

```bash
yarn add semantic-release @droplt/semantic-release-config -D
```

## Usage

The shareable config can be configured via the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

- A `.releaserc` file, written in YAML or JSON, with optional extensions: `.yaml`/`.yml`/`.json`/`.js`
- A `release.config.js` file that exports an object
- A `release` key in the project's `package.json` file

```js
// release.config.js
module.exports = {
  "extends": "@droplt/semantic-release-config"
}
```

```js
// package.json
{
  ...
  "release": {
    "extends": "@droplt/semantic-release-config"
  }
}
```

Using a `release.config.js` allow you to customize the default configuration:

```js
const config = require('@droplt/semantic-release-config')

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    'add_your_plugin_here',
    ...
  ],
}
```

## Examples

### Run NPM script before release

Using the pre-installed `@semantic-release/exec` plugin, you can run a custom **NPM script** before the release process.

```js
// release.config.js
const config = require('@droplt/semantic-release-config')

module.exports = {
  ...config,
  plugins: [
    ...config.plugins,
    ['@semantic-release/exec', {
      prepareCmd: 'yarn build',
    }],
  ],
}
```

> Refer to [`@semantic-release/exec`](https://github.com/semantic-release/exec#options) documentation for lifecycle hooks.

# eslint-config-viewar

[![Build Status](https://travis-ci.com/viewar/config-eslint.svg?token=9j4kv11sMyqyMRAPNQXm&branch=master)](https://travis-ci.com/viewar/config-eslint)
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)<br />
[![NPM Release](https://img.shields.io/npm/v/%40viewar%2Fconfig-eslint.svg?style=flat)](https://www.npmjs.com/package/%40viewar%2Fconfig-eslint)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org)
[![Semantic Versioning][semantic-img]][semantic-url]

<!-- badge-urls -->

[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/

<!-- /badge-urls -->

- [Installation](#installation)
- [Configuration](#configuration)
  - [Integration (VsCode)](#integration-vscode)
  - [Import Resolvers](#import-resolvers)
    - [webpack](#webpack)
    - [node](#node)

## Installation

> **to skip installation and configuration,**  
> **just run** `mrm --preset @viewar/mrm-preset lint`
>
> **see:** [lint Task of '@viewar/mrm-preset'](https://github.com/viewar/mrm-preset#lint)

**install package:** `npm i -D eslint @viewar/config-eslint`  
_includes all eslint and prettier related plugins and shared configs_

## Configuration

**eslint** (_either JS or JSON_)

**JS - {workspace}/.eslintrc.js:**

```js
module.exports = { extends: [require.resolve('@viewar/config-eslint')] };
```

**JSON - {workspace}/.eslintrc:**

```json
{ "extends": ["./node_modules/@viewar/config-eslint/index.js"] }
```

**prettier**

```js
// {workspace}/prettier.config.js
module.exports = require('@viewar/config-eslint/prettier.config.js');
```

### Integration (VsCode)

**install extensions:**

- "dbaeumer.vscode-eslint"
- "teeLang.vsprettier"

**configure vscode:**

```javascript
// {workspace}/.vscode/settings.json
{
  // PRETTIER
  {
  "editor.formatOnSaveTimeout": 500,

  "editor.defaultFormatter": "teeLang.vsprettier",
  "vsprettier.requireConfig": true,
  "vsprettier.packageManager": "npm",
  "vsprettier.useEsLint": false,
  "vsprettier.useStyleLint": true,

  "editor.codeActionsOnSave": { "source.fixAll.eslint": true },
  "eslint.validate": [ "javascript", "javascriptreact", "typescript", "typescriptreact" ],
  "eslint.alwaysShowStatus": true,
  "eslint.run": "onType",
  "eslint.lintTask.enable": true,
  "eslint.workingDirectories": [{ "directory": ".", "changeProcessCWD": true }],

  "javascript.implicitProjectConfig.checkJs": true,

  "javascript.validate.enable": false,
  "javascript.format.enable": false,
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false,
    "editor.formatOnSaveTimeout": 500
  },
}

```

### Import Resolvers

> enables absolute import paths  
> like `import Header from 'components/Header'`

#### webpack

> applied to env 'react'

- **uses '[tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin#readme)'** to resolve import paths  
  **requires:** workspaceRoot/tsconfig.json  
  see [path-mapping for typescript](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
- **if tsconfig.json is not present** it won't use that plugin  
  and uses the **default resolve config**:

  ```js
    resolve: {
      extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
      // paths are relative to workspace root
      alias:      {
        components: join(basename(CONSTANTS.paths.src), 'components'),
        assets: CONSTANTS.paths.assets
      },
      modules: ['node_modules'],
    }
  ```

- **you can overwrite this config** to fit your projects module resolvement,  
  if you **add 'webpack.config.resolve.js'** to your workspaceRoot  
  _(use format of '[src/webpack.config.resolve.js](https://github.com/viewar/webpack/blob/master/src/webpack.config.resolve.js)')_
  - This config will also be used by '[@viewar/webpack](https://github.com/viewar/webpack)'
  - for more information see [webpack's resolve config](https://webpack.js.org/configuration/resolve/)

the subpath to your resolver config can be set per env var `CONFIG_PATH`

#### node

> applied to env 'browser' and 'node'

```javascript
{
  paths:      [ './src' ],
  extensions: [ '.js', '.jsx', '.json' ],
}
```

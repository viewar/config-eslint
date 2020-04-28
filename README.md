# eslint-config-viewar

[![Build Status](https://travis-ci.com/viewar/config-eslint.svg?token=9j4kv11sMyqyMRAPNQXm&branch=master)](https://travis-ci.com/viewar/config-eslint)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=viewar/config-eslint&identifier=214496490)](https://dependabot.com)
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)<br />
[![NPM Release](https://img.shields.io/npm/v/%40viewar%2Fconfig-eslint.svg?style=flat)](https://www.npmjs.com/package/%40viewar%2Fconfig-eslint)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org)
[![Semantic Versioning][semantic-img]][semantic-url]

<!-- badge-urls -->

[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/

<!-- /badge-urls -->

## Usage

### installation

`npm i -D eslint @viewar/config-eslint`

### configuration

**eslint** (_either JS or JSON_)

**JS - {workspace}/.eslintrc.js:**

```js
module.exports = { extends: [require.resolve('@viewar/config-eslint')] };
```

**JSON - {workspace}/.eslintrc:**

```json
{ "extends": ["./node_modules/@viewar/config-eslint"] }
```

**prettier**

```js
// {workspace}/prettier.config.js
module.exports = require('@viewar/config-eslint/prettier.config.js');
```

### integration (VsCode)

#### install extensions

- "dbaeumer.vscode-eslint"
- "teeLang.vsprettier" _- optional_

#### configure vscode

```javascript
// {workspace}/.vscode/settings.json
{
  // PRETTIER
  "editor.defaultFormatter": "teeLang.vsprettier",
  "vsprettier.requireConfig": true,
  "vsprettier.packageManager": "npm",
  "vsprettier.useEsLint": false,
  "vsprettier.useStyleLint": true,
  // ESLINT
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "eslint.run": "onType",
  "eslint.lintTask.enable": true,
  "eslint.workingDirectories": [{ "directory": ".", "changeProcessCWD": true }],
  // VS CODE general
  "javascript.implicitProjectConfig.checkJs": true,
  // disable built in linter and formatter
  "javascript.validate.enable": false,
  "javascript.format.enable": false
  // overwrite for react files
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false,
    "editor.formatOnSaveTimeout": 500
  },
}

```

## import resolvers

### node

```javascript
{
  paths:      [ './src' ],
  extensions: [ '.js', '.jsx', '.json' ],
}
```

### webpack

as default we use just add the extensions:
`{ extensions: ['.js', '.jsx', '.json'] }`

if you are using [special resolve options](https://github.com/viewar/webpack/blob/master/src/webpack.config.resolve.js) like additional module directories,  
you can add an `webpack.config.resolve.js` to your workspace root.

the subpath to your resolver config can be set per env var `CONFIG_PATH`

## TODO

- do not extend envs
- ? export '.vscode/settings.json'
- add eslint-plugin-jsdoc

## ISSUES

**node/no-unpublished-require**  
 `plugin:node/recommended` demands to have all  
 used modules in dependencies (!devDependencies)  
 atm, the rule is turned off due to webpack-resolver

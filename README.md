# eslint-config-viewar

[![Build Status](https://travis-ci.com/viewar/config-eslint.svg?token=9j4kv11sMyqyMRAPNQXm&branch=master)](https://travis-ci.com/viewar/config-eslint)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=viewar/config-eslint&identifier=214496490)](https://dependabot.com)
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)<br />
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org)
[![Semantic Versioning][semantic-img]][semantic-url]

<!-- badge-urls -->

[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/

<!-- /badge-urls -->

## Usage

### installation (modules)

**config**  
`npm i -D https://github.com/DoubleU23/eslint-config-viewar`

### configuration (rc files)

**eslint**

```javascript
// ROOT/.eslintrc
{ "extends": ["viewar/env/react"] } // thats all!
```

**prettier**

> as this package is still in early stage,  
> you'll need to add our prettierrc config manually

```javascript
// {workspace}/.prettierrc
{
  "printWidth": 90,
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "always",
  "semi": true,
  "bracketSpacing": true,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "overrides": [
    {
      "files": "*.{js,jsx}",
      "options": {
        "parser": "babel"
      }
    }
  ]
}

```

### integration (VsCode)

#### install extensions

- "teeLang.vsprettier"
- "dbaeumer.vscode-eslint"

#### configure vscode

```javascript
// {workspace}/.vscode/settings.json
{
  "javascript.implicitProjectConfig.checkJs": true,
  "javascript.validate.enable": false,
  "javascript.format.enable": false,
  "editor.defaultFormatter": "teeLang.vsprettier",
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false,
    "editor.formatOnSaveTimeout": 500
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "eslint.run": "onType",
  "eslint.lintTask.enable": true,
  "eslint.workingDirectories": [{ "directory": ".", "changeProcessCWD": true }],
  "vsprettier.packageManager": "npm",
  "vsprettier.useEsLint": false,
  "vsprettier.useStyleLint": true,
  "vsprettier.requireConfig": true
}

```

### TBD - prettier

- provide export of .prettier
  use `process.cwd()` for correct require-path!?

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

if you are using [special resolve options](https://bitbucket.org/viewar_sf/viewar-webpack/src/master/src/webpack.config.resolve.js) like additional module directories,  
you can add an `webpack.config.resolve.js` to your workspace root.

the subpath to your resolver config can be set per env var `CONFIG_PATH`

## TODO

- remove prettier-eslint
- do not extend envs
- export ? .vscode/settings
- export .prettierrc
- stage-lint
- add eslint-plugin-jsdoc
- move eslint/prettier RC files into /config
  - add path to vscode settings

## ISSUES

- `node/no-unpublished-require`  
  `plugin:node/recommended` demands to have used modules in dependencies (!devDependencies)
  atm, the rule is turned of

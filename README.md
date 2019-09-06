# eslint-config-viewar

[![CircleCI status][circle-ci-status-img]](https://circleci.com/bb/viewar_sf/eslint-config-viewar/tree/master)

[circle-ci-status-img]: https://circleci.com/bb/viewar_sf/eslint-config-viewar.svg?style=svg

## Usage

### installation (modules)

**config**  
`npm i -D https://bitbucket.org/viewar_sf/eslint-config-viewar`

**basic libaries**  
`npm i -D prettier eslint eslint-formatter-pretty eslint-plugin-promise`

**env/node**  
`npm i -D babel-eslint eslint-plugin-node eslint-plugin-import eslint-import-resolver-webpack`

**env/react**  
`npm i -D babel-eslint eslint-plugin-node eslint-plugin-import eslint-plugin-react`

### configuration (rc files)

**eslint**

```javascript
// ROOT/.eslintrc
{ "extends": ["viewar/env/react"] } // thats all!
```

**prettier**

> as this package is still in early stage,  
> you'll need to add your prettierrc config manually

```javascript
// ROOT/.prettierrc
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
  "quoteProps": "as-needed"
}
```

### integration (VsCode)

#### install extensions

- "teeLang.vsprettier"
- "dbaeumer.vscode-eslint"

#### configure vscode

```javascript
// ROOT/.vscode/settings.json
// (workspace or global)
{
  "javascript.validate.enable": false,
  "javascript.format.enable": false,
  "editor.defaultFormatter": "teeLang.vsprettier",
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.formatOnPaste": false,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.formatOnSaveTimeout": 500,
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,
  "eslint.run": "onType",
  "vsprettier.packageManager": "npm",
  "vsprettier.useEsLint": true,
  "vsprettier.useStyleLint": true,
  "vsprettier.requireConfig": true,
  "eslint.lintTask.enable": true,
  "eslint.workingDirectories": [
    { "directory": ".", "changeProcessCWD": false },
    { "directory": "src", "changeProcessCWD": true }
  ]
}

```

### TBD - prettier

- provide export of .prettier
  use `process.cwd()` for correct require-path!?

## Roadmap

**next**

- remove eslint-plugin-standard  
  the plugin is used for one rule only: 'standard/no-callback-literal',  
  once, this rule [will get removed](https://github.com/standard/standard/issues/1352) (blocked by [eslint-plugin-node#179](https://github.com/standard/standard/issues/1352)),  
  we can finally get rid of `eslint-plugin-standard` and just use `eslint-config-standard`

## TODO

- use env-based exports (/browser, /node, /react)
- move `.eslintrc` to /config ?
  - add path to vscode settings
- use .vscode/settings from this packages
- use .prettierrc from this package
- `npm run format`
- stage-lint
- add eslint-plugin-jsdoc
- test/enhance import resolver (with eslint-resolver-webpack)
  - try to use 'eslint-import-resolver-babel-module' (without webpack resolver)
- TEST on other workstations (especially on MAC)
- shove eslint/prettier RC files into /config
- add eslint-plugin-jsx
- optional
  - add '[eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)'
- clearify usage of "extend->require.resolve" vs "...require()"

## ISSUES

- `node/no-unpublished-require`  
  `plugin:node/recommended` demands to have used modules in dependencies (!devDependencies)
  => turn off rule? => shove into node-specific setup
- named imports not checked on require-syntax
- import/order - instant imports are ignored,  
  which does mess up the import order (no empty line between groups)

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
`npm i -D babel-eslint eslint-plugin-node eslint-plugin-import eslint-import-resolver-node`

**env/react**  
`npm i -D babel-eslint eslint-plugin-node eslint-plugin-import eslint-plugin-react eslint-import-resolver-webpack`

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

- export .vscode/settings
- export .prettierrc
- stage-lint
- add eslint-plugin-jsdoc
- move eslint/prettier RC files into /config
  - add path to vscode settings
- add eslint-plugin-jsx

## ISSUES

- `node/no-unpublished-require`  
  `plugin:node/recommended` demands to have used modules in dependencies (!devDependencies)
  atm, the rule is turned of

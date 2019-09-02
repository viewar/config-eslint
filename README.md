# Formating and Linting

## how to

**install basic libaries**  
`npm i -D prettier eslint`

**install helpers and plugins**  
`npm i -D babel-eslint eslint-formatter-pretty eslint-plugin-standard eslint-plugin-promise eslint-plugin-node eslint-plugin-import eslint-plugin-react eslint-import-resolver-webpack`

## setup

> [prettier](https://prettier.io) + [EsLint](https://eslint.org/) = [prettier-eslint](https://github.com/prettier/prettier-eslint-cli)

**why both?**

- **prettier is a formatter**
  ** limited options
  ** formatting makes code sometimes unreadable  
  eslint-features (alignment, advanced bracket styles, jsx formats, ...)
- **eslint is a linter**  
  ** checks for errors and pitfalls in code (undefined vars, broken imports, const assignments, ...)
  ** helps to enforce "best-practise" (===, no-param-reassignments, ...)
  \*\* provides logical formatting

reason to NOT use eslint-plugin-prettier:  
prettier formatations often collide with eslint formatting
there is an eslint-config-prettier, that disables/overrules the eslint rules, which are colliding with eslint  
but thats NOT what we want.
(align, key-spacing, consecutive assignments, multiple-linebreaks (f.e. between import-groups))

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
- TEST on other workstations (especially on MAC)
- shove eslint/prettier RC files into /config
- add eslint-plugin-jsx
- optional
  - add '[eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)'

## ISSUES

- `node/no-unpublished-require`  
  `plugin:node/recommended` demands to have used modules in dependencies (!devDependencies)
  => turn off rule? => shove into node-specific setup
- named imports not checked on require-syntax
- import/order - instant imports are ignored,  
  which does mess up the import order (no empty line between groups)

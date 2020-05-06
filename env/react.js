// babelRegister needed for import resolver
require('../utils/babelRegister');
const getResolveConfigPath = require('../utils/getResolveConfigPath');

module.exports = {
  env: {
    es6:     true,
    node:    true,
    browser: false,
  },
  parser:        'babel-eslint',
  parserOptions: {
    ecmaVersion:  2020,
    sourceType:   'module',
    ecmaFeatures: {
      jsx:     true,
      classes: true,
      modules: true,
    },
  },
  settings: {
    engines: { node: '>=12.0.0' },
    react:   {
      createClass: 'createReactClass',
      version:     '16.0.9',
      flowVersion: '0.53',
    },
    'import/resolver': {
      node:    false,
      webpack: {
        config: getResolveConfigPath(),
        env:    'test',
      },
    },
  },
  // TYPESCRIPT OVERRIDES
  // Dont override in extend file - doesn't work
  overrides: [
    {
      files:         [ '*.ts', '*.tsx' ],
      parser:        '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: process.cwd,
        project:         './tsconfig.json',
      },
      plugins:   [ '@typescript-eslint' ],
      'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': [ '.ts', '.tsx' ],
        },
        'import/resolver': {
          node:       false,
          webpack:    false,
          typescript: { // uses <root>/tsconfig.json
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          },
        },
      },
      rules: {
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/ban-ts-ignore':        [ 'warn' ],
        '@typescript-eslint/camelcase':            [ 'warn' ],
      },
    },
  ],
  ignorePatterns: [ 'build/**/*', '**/*.html.esj' ],
  plugins:        [ 'react', 'react-hooks' ],
  'extends':      [
    require.resolve('../env/node'),
    // REACT RULES
    'plugin:react/recommended',
    require.resolve('../rules/react'),
    // typescript
  ],
};

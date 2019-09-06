const CONSTANTS = require('../utils/constants');

module.exports = {
  env: {
    node:    true,
    mocha:   true,
    es6:     false,
    browser: false,
  },
  parser:        'babel-eslint',
  parserOptions: {
    ecmaVersion:  2019,
    sourceType:   'module',
    ecmaFeatures: {
      modules: true,
      jsx:     false,
      classes: false,
    },
  },
  settings: {
    // 'engines' config is taken from package.js
    // engines: { node: '>=10.0.0' },
    node: {
      tryExtensions: [ ...CONSTANTS.extensions ],
    },
    'import/resolver': {
      node: {
        paths:      [ '.' ],
        extensions: [ ...CONSTANTS.extensions ],
      },
    },
    // 'import/cache': { lifetime: 5 },
  },
  plugins:   [ 'promise', 'node', 'import' ],
  'extends': [
    require.resolve('../env/browser.js'),
    // RULES
    'plugin:node/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    // RULES
    // TODO: refactor: move into corresponding env
    require.resolve('../rules/import.js'),
    require.resolve('../rules/node.js'),
  ],

  rules: {
    /**
     * PRETTIER equivalents
     * should match .prettierrc config
     * otherwise you'll see eslint re-formating prettier changes
     */
    // printWidth
    'max-len': [ 'warn', 120, { ignoreComments: true }],
    indent:    [
      'error',
      2,
      {
        VariableDeclarator: {
          'var':   2,
          let:     2,
          'const': 1,
        },
        ignoreComments: false,
      },
    ],
    semi:            [ 'error', 'always' ], // prettier.semi
    quotes:          [ 'error', 'single' ], // prettier.singleQuote
    'comma-spacing': [
      'error',
      {
        before: false,
        after:  true,
      },
    ],
    'comma-dangle': [ 'error', 'always-multiline' ], // prettier.trailingComma
    'arrow-parens': [ 'error', 'always' ], // prettier.arrowParens

    // format
    /**
     * OBJECTS
     */
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords:    true,
        unnecessary: true,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline:     true,
          consistent:    true,
          minProperties: 2,
        },
        ObjectPattern: {
          multiline:     true,
          consistent:    true,
          minProperties: 4,
        },
        ImportDeclaration: {
          multiline:     true,
          consistent:    true,
          minProperties: 4,
        },
        ExportDeclaration: {
          multiline:     true,
          consistent:    true,
          minProperties: 2,
        },
      },
    ],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: false,
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        objectsInObjects: false,
        arraysInObjects:  false,
      },
    ],
    /**
     * ARRAYS
     */
    'array-element-newline': [ 'error', 'consistent' ],
    'array-bracket-newline': [ 'error', 'consistent' ],
    'array-bracket-spacing': [
      'error',
      'always',
      {
        singleValue:     true,
        objectsInArrays: false,
        arraysInArrays:  false,
      },
    ],
    /**
     * FUNCTIONS
     */
    'brace-style':                 [ 'error', 'stroustrup', { allowSingleLine: true }],
    'space-before-function-paren': [
      'error',
      {
        anonymous:  'never',
        named:      'never',
        asyncArrow: 'always',
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max:    2,
        maxEOF: 1,
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          VariableDeclarator:   true,
          ImportDeclaration:    true,
          AssignmentExpression: true,
          ClassProperty:        true,
        },
      },
    ],
    'one-var': [
      'error',
      {
        'const':            'never',
        'var':              'consecutive',
        let:              'consecutive',
        separateRequires: true,
      },
    ],
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon:  true,
        },
        multiLine: {
          beforeColon: false,
          afterColon:  true,
        },
        align: {
          beforeColon: false,
          afterColon:  true,
          mode:        'minimum',
          on:          'value',
        },
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after:  true,
      },
    ],
  },
};

const CONSTANTS = {
  extensions: {
    modules: [ '.js', '.jsx' ],
  },
};

module.exports = {
  env: {
    es6:     true,
    node:    true,
    browser: false,
  },
  parser:        'babel-eslint',
  parserOptions: {
    ecmaVersion:  2019,
    sourceType:   'module',
    ecmaFeatures: {
      jsx:     true,
      classes: true,
      modules: true,
    },
  },
  settings: {
    engines: { node: '>=12.0.0' },
    node:    {
      tryExtensions: [ ...CONSTANTS.extensions.modules ],
    },
    react:   {
      createClass: 'createReactClass',
      version:     '16.0.9',
      flowVersion: '0.53', // Flow version
    },
    // TODO: clearify (and refactor?) resolver settings
    'import/resolver': {
      node: {
        paths:      [ './config' ],
        extensions: [ '.js' ],
      },
      webpack: {
        paths:      [ './src' ],
        extensions: [ ...CONSTANTS.extensions.modules ],
      },
    },
    'import/cache': { lifetime: 5 },
  },
  plugins:   [ 'promise', 'node', 'import', 'react' ],
  'extends': [
    'standard',
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:promise/recommended',
    'plugin:react/recommended',
  ],

  rules: {
    // STANDARD OVERWRITES/ADDITIONS
    camelcase: [ 'error', {
      ignoreDestructuring: true,
      properties:          'never', // ignores properites case
    }],
    'block-spacing': [ 'error', 'always' ],
    yoda:            [ 'error', 'never' ],

    'no-undefined':   'error', // use "null" instead of undefined
    'no-undef':       [ 'error' ],
    'no-unused-vars': [ 'warn', {
      vars:               'local',
      caughtErrors:       'none',
      args:               'none',
      ignoreRestSiblings: true,
    }],

    'no-unused-expressions': [ 'error', {
      allowShortCircuit: true,
      allowTernary:      true,
    }],

    // eqeqeq: [ 'error', 'always', { 'null': 'ignore' }],

    /**
     * PRETTIER equivalents
     * should match .prettierrc config
     * otherwise you'll see eslint re-formating prettier changes
     */
    // printWidth
    'max-len':  [ 'warn', 120, { ignoreComments: true }],
    indent:    [ 'error', 2, {
      VariableDeclarator: {
        'var':   2,
        let:     2,
        'const': 1,
      },
      ignoreComments: false,
    }],
    semi:                                 [ 'error', 'always' ], // prettier.semi
    quotes:                               [ 'error', 'single' ], // prettier.singleQuote
    'comma-spacing':                      [ 'error', {
      before: false,
      after:  true,
    }],
    'comma-dangle':                       [ 'error', 'always-multiline' ], // prettier.trailingComma
    'arrow-parens':                       [ 'error', 'always' ], // prettier.arrowParens
    'react/jsx-closing-bracket-location': [ 1, 'line-aligned' ],

    // format

    /**
     * OBJECTS
     */
    'quote-props':          [ 'error', 'as-needed', {
      keywords:    true,
      unnecessary: true,
    }],
    'object-curly-newline':    [ 'error', {
      ObjectExpression:  {
        multiline:     true,
        consistent:    true,
        minProperties: 2,
      },
      ObjectPattern:     {
        multiline:     true,
        consistent:    true,
        minProperties: 2,
      },
      ImportDeclaration: 'never',
      ExportDeclaration: {
        multiline:     true,
        minProperties: 2,
      },
    }],
    'object-property-newline': [ 'error', {
      allowMultiplePropertiesPerLine: false,
    }],
    'object-curly-spacing':    [ 'error', 'always', {
      objectsInObjects: false,
      arraysInObjects:  false,
    }],
    /**
     * ARRAYS
     */
    'array-element-newline': [ 'error', 'consistent' ],
    'array-bracket-newline':   [ 'error', 'consistent' ],
    'array-bracket-spacing': [ 'error', 'always', {
      singleValue:     true,
      objectsInArrays: false,
      arraysInArrays:  false,
    }],
    /**
     * FUNCTIONS
     */
    'brace-style':                 [ 'error', 'stroustrup', { allowSingleLine: true }],
    'space-before-function-paren': [ 'error', {
      anonymous:  'never',
      named:      'never',
      asyncArrow: 'always',
    }],
    'no-multiple-empty-lines': [ 'error', {
      max:    2,
      maxEOF: 1,
    }],
    'no-multi-spaces': [ 'error', {
      exceptions: {
        VariableDeclarator:   true,
        ImportDeclaration:    true,
        AssignmentExpression: true,
        ClassProperty:        true,
      },
    }],
    'one-var': [ 'error', {
      'const':            'never',
      'var':              'consecutive',
      let:              'consecutive',
      separateRequires: true,
    }],
    'key-spacing': [ 'error', {
      singleLine: {
        beforeColon: false,
        afterColon:  true,
      },
      multiLine:  {
        beforeColon: false,
        afterColon:  true,
      },
      align: {
        beforeColon: false,
        afterColon:  true,
        mode:        'minimum',
        on:          'value',
      },
    }],
    'keyword-spacing': [ 'error', {
      before: true,
      after:  true,
    }],
    // import
    'import/no-unresolved': [ 'error', {
      commonjs: true,
      amd:      false,
    }],
    'sort-imports':         [ 2, {
      ignoreCase:            false,
      ignoreDeclarationSort: true,
      ignoreMemberSort:      true,
      memberSyntaxSortOrder: [ 'single', 'all', 'multiple', 'none' ],
    }],
    'import/order': [ 2, {
      'newlines-between': 'always',
      groups:             [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ],
    }],
    /**
     * NODE
     */
    'node/no-unpublished-require':            0,
    // depracated!
    // see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
    'node/no-unsupported-features/es-syntax': 0,
  },
};

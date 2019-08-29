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
    react:   {
      createClass: 'createReactClass',
      version:     '16.0.9',
      flowVersion: '0.53', // Flow version
    },
    // TODO: clearify (and refactor?) resolver settings
    'import/resolver': {
      node: {
        paths:      ['.'],
        extensions: [ '.js', '.jsx' ],
      },
      webpack: {
        paths:      [ './src', './__tests__' ],
        extensions: [ '.js', '.jsx' ],
      },
    },
    'import/cache': {
      lifetime: 5,
    },
  },
  plugins: [ 'react', 'import', 'promise' ],
  extends: [
    'eslint:recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:promise/recommended',
    'plugin:react/recommended',
  ],

  rules: {
    // STANDARD OVERWRITES/ADDITIONS
    camelcase: [
      'error', {
        ignoreDestructuring: true,
        properties:          'never', // ignores properites case
      },
    ],
    'block-spacing': [ 'error', 'always' ],
    yoda:            [ 'error', 'never' ],

    /**
     * PRETTIER equivalents
     * should match .prettierrc config
     * otherwise you'll see eslint re-formating prettier changes
     */
    // printWidth
    'max-len': [
      'warn', 120, {
        ignoreComments: true,
      },
    ],
    indent: [
      'error', 2, {
        VariableDeclarator: {
          var:   2,
          let:   2,
          const: 1,
        },
        ignoreComments: false,
      },
    ],
    semi:            [ 'error', 'always' ], // semi
    quotes:          [ 'error', 'single' ], // singleQuote
    'comma-spacing': [
      'error', {
        before: false,
        after:  true,
      },
    ],
    'comma-dangle':                       [ 'error', 'always-multiline' ], // trailingComma
    'arrow-parens':                       [ 'error', 'always' ],
    'react/jsx-closing-bracket-location': [ 1, 'line-aligned' ],

    // format
    'quote-props': [
      'error', 'as-needed', {
        keywords:    false,
        unnecessary: true,
      },
    ],
    'object-property-newline': [
      'error', {
        allowMultiplePropertiesPerLine: false,
      },
    ],
    'object-curly-newline': [
      'error', {
        ObjectPattern:     { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': [ 'error', 'always', {
      objectsInObjects: false,
      arraysInObjects:  false,
    }],
    // 'array-element-newline': [ 'error', {
    //   multiline: false,
    // }],
    // 'array-bracket-newline':   [
    //   'error',
    //   {
    //     multiline: true,
    //     minItems:  5
    //   }
    // ],
    'array-bracket-spacing': [ 'error', 'always', {
      singleValue:     false,
      objectsInArrays: false,
      arraysInArrays:  false,
    }],

    'brace-style': [ 'error', 'stroustrup', {
      allowSingleLine: true,
    }],
    'space-before-function-paren': [
      'error', {
        anonymous:  'never',
        named:      'never',
        asyncArrow: 'always',
      },
    ],
    'no-multiple-empty-lines': [
      'error', {
        max:    2,
        maxEOF: 1,
      },
    ],
    'no-multi-spaces': [
      'error', {
        exceptions: {
          VariableDeclarator:   true,
          ImportDeclaration:    true,
          AssignmentExpression: true,
          ClassProperty:        true,
        },
      },
    ],
    'one-var': [
      'error', {
        const:            'never',
        var:              'consecutive',
        let:              'consecutive',
        separateRequires: true,
      },
    ],
    'key-spacing': [
      'error', {
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
          mode:        'strict',
          on:          'value',
        },
      },
    ],
    'keyword-spacing': [
      'error', {
        before: true,
        after:  true,
      },
    ],
    // import
    'import/no-unresolved': [ 'error', {
      commonjs: true,
      amd:      true,
    }],
    'sort-imports': [ 2, {
      ignoreCase:            false,
      ignoreDeclarationSort: true,
      ignoreMemberSort:      true,
      memberSyntaxSortOrder: [ 'single', 'all', 'multiple', 'none' ],
    }],
    'import/order': [
      2, {
        'newlines-between': 'always',
        groups:             [ 'builtin', 'external', 'internal', 'parent', 'sibling', 'index' ],
      },
    ],
  },
};

require('@babel/register', {
  modules: true,
  presets: ['@babel/preset-env'],
});

module.exports = {
  env: { es6: true, node: true, browser: false },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    engines: { node: '>=12.0.0' },
    react: {
      createClass: 'createReactClass',
      version: '16.0.9',
      flowVersion: '0.53', // Flow version
    },
    // TODO: clearify (and refactor?) resolver settings
    'import/resolver': {
      node: {
        paths: ['.', './src'],
        extensions: ['.js', '.jsx'],
      },
      webpack: {
        paths: ['.', './src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  plugins: ['react', 'import', 'promise'],
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
  ],

  rules: {
    /**
     * PRETTIER equivalents
     * should match .prettierrc config
     * otherwise you'll see eslint re-formating prettier changes
     */
    'max-len': ['error', 90], // printWidth
    indent: [
      'error',
      2,
      {
        VariableDeclarator: { var: 2, let: 2, const: 1 },
        ignoreComments: false,
      },
    ],
    semi: ['error', 'always'], // semi
    quotes: ['error', 'single'], // singleQuote
    'comma-dangle': ['error', 'always-multiline'], // trailingComma
    'arrow-parens': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'], // bracketSpacing
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],

    // format
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true,
          AssignmentExpression: true,
          ClassProperty: true,
        },
      },
    ],
    'one-var': [
      'error',
      {
        const: 'never',
        var: 'consecutive',
        let: 'consecutive',
        separateRequires: true,
      },
    ],
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
        },
        multiLine: {
          beforeColon: false,
          afterColon: true,
        },
        align: {
          beforeColon: false,
          afterColon: true,
          mode: 'minimum',
          on: 'value',
        },
      },
    ],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-multi-spaces': 0,
    // import
    'import/no-unresolved': 2,
    'sort-imports': [
      2,
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['single', 'all', 'multiple', 'none'],
      },
    ],
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
  },
};

module.exports = {
  // parser:        'babel-eslint',
  parserOptions: {
    sourceType:   'script',
    ecmaVersion:  6,
    ecmaFeatures: {
      jsx:     false,
      classes: false,
    },
  },
  env: {
    es6:  false,
    node: false,
  },

  plugins: [ 'promise' ],

  'extends': [
    'eslint:recommended',
    'plugin:promise/recommended',
    // RULES
    ...[
      '../rules/standard.js',
      '../rules/standard-overwrites.js',
      '../rules/promise.js',
    ].map(require.resolve),
  ],

  globals: {
    document:  false,
    navigator: false,
    window:    false,
    console:   false,
  },
};

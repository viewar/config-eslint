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

  plugins: [
    // 'standard',
    'promise',
  ],

  'extends': [
    'eslint:recommended',
    'standard',
    'plugin:promise/recommended',
    // TODO: rules
    // ...[
    //   '../rules/standard.js',
    //   '../rules/overwrites.js',
    // ].map(require.resolve),
  ],

  globals: {
    document:  true,
    navigator: true,
    window:    true,
  },

  rules: {
    // overwrites/additions for 'plugin:promise/recommended'
    // TODO: env/browser -> add standard rules (without plugins)
  },
};

require('../utils/babelRegister');

const CONSTANTS = require('../utils/constants');

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
    node:    {
      tryExtensions: [ ...CONSTANTS.extensions.modules ],
    },
    react:   {
      createClass: 'createReactClass',
      version:     '16.0.9',
      flowVersion: '0.53',
    },
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
  },
  // 'import/cache': { lifetime: 5 },
  plugins:   [ 'react' ],

  'extends': [
    require.resolve('../env/node'),
    // RULES
    'plugin:react/recommended',
    require.resolve('../rules/react'),
  ],
};


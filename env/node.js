const CONSTANTS = require('../utils/constants');

module.exports = {
  env: {
    node:    true,
    es6:     false,
    browser: false,
    mocha:   true,
    jest:    true,
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
    engines:          { node: '>=10.0.0' },
    // TODO: maybe remove node-resolver
    node:    {
      paths:        [ '.' ],
      resolvePaths: [ CONSTANTS.paths.src, 'node_modules' ],
      extensions:   [ ...CONSTANTS.extensions ],
    },
    'import/resolver': {
      node: {
        paths:      [ CONSTANTS.paths.src, '.' ],
        extensions: [ ...CONSTANTS.extensions ],
      },
    },
  },
  globals: {
    global:  'readonly',
    process: 'readonly',
  },
  plugins:   [ 'promise', 'node', 'import' ],
  'extends': [
    require.resolve('../env/browser.js'),
    // RULES
    'plugin:node/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',

    require.resolve('../rules/base.js'),
    require.resolve('../rules/import.js'),
    require.resolve('../rules/node.js'),
  ],
};

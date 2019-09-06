const CONSTANTS = require('../utils/constants')

module.exports = {
  env: {
    node: true,
    mocha: true,
    es6: false,
    browser: false
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: false,
      classes: false
    }
  },
  settings: {
    // 'engines' config is taken from package.js
    // engines: { node: '>=10.0.0' },
    node: {
      tryExtensions: [ ...CONSTANTS.extensions ]
    },
    'import/resolver': {
      node: {
        paths: [ '.' ],
        extensions: [ ...CONSTANTS.extensions ]
      }
    }
    // 'import/cache': { lifetime: 5 },
  },
  plugins: [ 'promise', 'node', 'import' ],
  'extends': [
    require.resolve('../env/browser.js'),
    // RULES
    'plugin:node/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    // RULES
    require.resolve('../rules/import.js'),
    require.resolve('../rules/node.js')
  ],

  rules: {}
}

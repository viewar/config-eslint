// babelRegister needed for import resolver
require('../utils/babelRegister');

const CONSTANTS         = require('../utils/constants');
const getResolveConfigPath  = require('../utils/getResolveConfigPath');

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
      node: {
        paths:      [ './src' ],
        extensions: [ ...CONSTANTS.extensions.filter((v) => v !== '*') ],
      },
      webpack: (() => {
        const resolveConfigPath = getResolveConfigPath();

        return resolveConfigPath ? {
          config: resolveConfigPath,
          env:    'test',
        } : {
          extensions: [ ...CONSTANTS.extensions.concat([ '*' ]) ],
        };
      })(),
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

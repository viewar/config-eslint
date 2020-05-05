// babelRegister needed for import resolver
require('../utils/babelRegister');
const getResolveConfigPath = require('../utils/getResolveConfigPath');

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
      node:    false,
      webpack: {
        config: getResolveConfigPath(),
        env:    'test',
      },
    },
  },
  plugins:   [ 'react', 'react-hooks' ],
  'extends': [
    require.resolve('../env/node'),
    // REACT RULES
    'plugin:react/recommended',
    require.resolve('../rules/react'),
  ],
};

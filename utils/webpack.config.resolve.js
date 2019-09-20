const CONSTANTS = require('./constants');


const resolveConfig = {
  resolve: {
    extensions: [ ...CONSTANTS.extensions.concat([ '*' ]) ],
    modules:    [ process.env.WEBPACK_PATH || './src', 'node_modules' ],
  },
};

module.exports = resolveConfig;

const path = require('path');

const ROOT    = path.resolve(process.cwd());
const paths   = {
  root: ROOT,
  src:  path.resolve(process.env.WEBPACK_PATH || 'src'),
};

const CONSTANTS = {
  paths,
  extensions: [ '.js', '.jsx', '.json' ],
};

module.exports = CONSTANTS;

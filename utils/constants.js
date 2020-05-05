const path = require('path');

const ROOT = path.resolve(process.cwd());
const paths = {
  root: ROOT,
  src:  path.resolve(process.env.WEBPACK_PATH || 'src'),
};

const CONSTANTS = {
  paths,
  extensions:      [ '.js', '.jsx', '.ts', '.tsx', '.json' ],
  assetExtensions: [ '.png$', '.webp$', '.jpg$', 'gif', '.svg$', '.mp4$' ],
};

module.exports = CONSTANTS;

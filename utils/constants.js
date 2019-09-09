<<<<<<< HEAD
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
=======
const path = require('path')

const ROOT    = path.resolve(process.cwd())
const paths   = {
  root: ROOT,
  src: path.resolve(process.env.WEBPACK_PATH || 'src')
}

const CONSTANTS = {
  paths,
  extensions: [ '.js', '.jsx', '.json' ]
}
>>>>>>> 1e7921dce560d514a989cfadf29bf67c627e07b6

module.exports = CONSTANTS

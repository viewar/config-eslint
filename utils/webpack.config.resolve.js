const { join, basename } = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const CONSTANTS = require('./constants');

const resolveConfig = {
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json' ],
  },
};

// check if tsconfig is present
const tsconfigPath = join(CONSTANTS.paths.root, 'tsconfig.json');
let tsconfigIsPresent;
try {
  require(tsconfigPath);
  tsconfigIsPresent = true;

  if (process.env.DEBUG) {
    console.log('\n[@viewar/webpack] tsconfig is PRESENT, so we USE \'tsconfig-paths-webpack-plugin\'\n\n');
  }
}
catch (e) {
  tsconfigIsPresent = false;
  if (process.env.DEBUG) {
    console.log('\n[@viewar/webpack] tsconfig is NOT PRESENT, so we DON\'T USE \'tsconfig-paths-webpack-plugin\'\n\n');
  }
}


if (tsconfigIsPresent) {
  // use tsconfig-paths-webpack-plugin
  resolveConfig.resolve.plugins = [ new TsconfigPathsPlugin({
    configFile: tsconfigPath,
  }) ];
}
else {
  // use default resolve config
  // paths are relative to workspaceRoot
  resolveConfig.resolve.alias = {
    components: join(basename(CONSTANTS.paths.src), 'components'),
    assets:     CONSTANTS.paths.assets,
  };
  resolveConfig.resolve.modules = [ 'node_modules' ];
}

module.exports = resolveConfig;

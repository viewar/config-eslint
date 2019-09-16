const path = require('path');

/**
 * @name getResolveConfigPath
 * @param {string} pathToConfigs - relative to workspace root
 * @returns {string} resolvedPath - path to resolveConfig
 */
const getResolveConfigPath = (pathToConfigs) => {
  let resolvedPath;
  try {
    resolvedPath = path.resolve(
      process.cwd(),
      pathToConfigs || process.env.CONFIG_PATH || '',
      './webpack.config.resolve.js'
    );
    // get path
    if (process.env.DEBUG) {
      console.log('[@viewar/webpack] Info: loading resolve config:', resolvedPath);
    }
    // verify if file is loadable
    require(resolvedPath);
  }
  catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      if (process.env.DEBUG) {
        console.log(
          '[@viewar/webpack] Info: webpack.config.resolve.js not found - using default resolver config'
        );
      }
    }
    else {
      throw e;
    }

    return false;
  }
  return resolvedPath;
};

module.exports = getResolveConfigPath;

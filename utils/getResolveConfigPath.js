const path = require('path');

/**
 * @name getResolveConfigPath
 * @param {string} pathToConfigs - relative to workspace root
 * @returns {string} resolvedPath - path to resolveConfig
 */
const getResolveConfigPath = (pathToConfigs) => {
  let resolvedPath;
  try {
    // get path
    resolvedPath = path.resolve(
      process.cwd(),
      pathToConfigs || process.env.CONFIG_PATH || '',
      './webpack.config.resolve.js',
    );
    process.env.DEBUG &&
      console.log(
        '\n[@viewar/webpack] Info: try to load resolve config from:\n',
        resolvedPath,
      );
    // verify if file is loadable
    require(resolvedPath);
  }
  catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      process.env.DEBUG &&
        console.log(
          '\n[@viewar/webpack] Warning: webpack.config.resolve.js not found - using \'eslint-config-viewar/utils/webpack.config.resolve.js\'\n',
        );
    }
    else {
      throw e;
    }

    // return default resolve config
    return path.resolve(__dirname, 'webpack.config.resolve.js');
  }

  process.env.DEBUG &&
    console.log(
      '\n[@viewar/webpack] Info: resolve config found under:\n',
      resolvedPath,
      '\n',
    );

  return resolvedPath;
};

module.exports = getResolveConfigPath;

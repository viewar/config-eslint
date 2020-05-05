const path = require('path');

/**
 * @name getResolveConfigPath
 * @param {string} pathToConfigs - relative to workspace root
 * @returns {string} resolvedPath - path to resolveConfig
 */
const getResolveConfigPath = (pathToConfigs) => {
  let resolvedPath;

  // lookup workspace/webpack.config.resolve.js
  // to be able to overwrite resolve config per project
  try {
    // get path
    resolvedPath = path.resolve(
      process.cwd(),
      pathToConfigs || '',
      './webpack.config.resolve.js',
    );
    process.env.DEBUG &&
      console.log(
        '\n[@viewar/config-eslint] Info: try to load resolve config from:\n',
        resolvedPath,
      );
    // verify if file is loadable
    require(resolvedPath);
  }
  catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      process.env.DEBUG &&
        console.log(
          // eslint-disable-next-line max-len
          '\n[@viewar/config-eslint] webpack.config.resolve.js not found - using \'@viewar/config-eslint/utils/webpack.config.resolve.js\'\n',
        );
    }
    else {
      throw e;
    }

    // return default resolve config
    resolvedPath = path.resolve(__dirname, 'webpack.config.resolve.js');
  }

  process.env.DEBUG &&
    console.log(
      '\n[@viewar/config-eslint] Info: resolve config found under:\n',
      resolvedPath,
      '\n',
    );

  return resolvedPath;
};

module.exports = getResolveConfigPath;

module.exports = {
  // add overwrites/additions for 'plugin:node/recommended'
  rules: {
    //
    // node-rules of 'eslint-config-standard@1.4.1' (MIT license)
    //
    'node/no-deprecated-api':                 'error',
    'node/process-exit-as-throw':             'error',
    //
    // custom node-rules
    //
    'node/no-unpublished-require':            0,
    // depracated! breaks `import/export` usage
    // see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
    'node/no-unsupported-features/es-syntax': 0,
    'node/no-extraneous-import':              0,
    'node/no-extraneous-require':             0,
  },
};

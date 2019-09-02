module.exports = {
  // add overwrites/additions for 'plugin:node/recommended'
  rules: {
    'node/no-unpublished-require':            0,
    // depracated! breaks `import/export` usage
    // see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md
    'node/no-unsupported-features/es-syntax': 0,
  },
};

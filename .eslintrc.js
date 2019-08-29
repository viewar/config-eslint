require('@babel/register', {
  modules: true,
  presets: ['@babel/preset-env'],
});

module.exports = {
  extends: [require.resolve('./env/node.js')],
};

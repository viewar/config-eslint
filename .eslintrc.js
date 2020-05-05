require('@babel/register', {
  modules: true,
  presets: ['@babel/preset-env', {
    "modules": "commonjs",
  }],
});

module.exports = {
  extends: [require.resolve('./env/react.js')],
};

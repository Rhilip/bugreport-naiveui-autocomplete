/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/bugreport-naiveui-autocomplete/'
    : '/',
  outputDir: 'docs'
}

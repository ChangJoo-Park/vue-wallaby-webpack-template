const webpackConfig = require('./build/webpack.test.conf.js')
const wallabyWebpack = require('wallaby-webpack')

module.exports = function (wallaby) {
  const wallabyPostprocessor = wallabyWebpack(webpackConfig)

  return {
    files: [
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      {pattern: 'src/**/*.*', load: false}
    ],

    env: {
      type: 'browser'
    },

    tests: [
      {pattern: 'test/**/*.spec.js', load: false}
    ],

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests()
    },

    hints: {
      ignoreCoverage: /ignore coverage/
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    debug: true
  }
}

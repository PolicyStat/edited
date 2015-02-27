var SPEC_FILE_PATH = 'test/spec.js'
var CI = !!process.env.CI

var c = {}
c.frameworks = ['browserify', 'jasmine']
c.files = [SPEC_FILE_PATH]
c.preprocessors = {}
c.preprocessors[SPEC_FILE_PATH] = 'browserify'
c.browserify = {
  debug: true,
  configure: function (bundle) {
    bundle.on('prebundle', function () {
      bundle.exclude('jsdom')
    })
  }
}
c.reporters = ['progress']
if (CI) c.reporters.push('saucelabs')
c.customLaunchers = require('policystat-sauce-browsers')
c.browsers = CI ? Object.keys(c.customLaunchers) : ['Chrome', 'Firefox']
c.singleRun = CI

module.exports = function (config) {
  config.set(c)
}

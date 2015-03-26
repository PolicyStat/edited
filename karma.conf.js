var SPEC_FILE_PATH = 'test/unit/index.js'
var CI = !!process.env.CI

var c = {}
c.frameworks = ['browserify', 'jasmine']
c.files = [SPEC_FILE_PATH]
c.preprocessors = {}
c.preprocessors[SPEC_FILE_PATH] = 'browserify'
c.browserify = {debug: true}
c.reporters = ['progress']
c.browsers = ['Chrome']
c.singleRun = CI

module.exports = function (config) {
  config.set(c)
}

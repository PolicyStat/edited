var SPEC_FILE_PATH = 'test/spec.js'

var common = {}

common.frameworks = ['browserify', 'jasmine']
common.files = [SPEC_FILE_PATH]
common.preprocessors = {}
common.preprocessors[SPEC_FILE_PATH] = 'browserify'
common.browserify = {debug: true}
common.reporters = ['progress']

module.exports = common

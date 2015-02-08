// Karma configuration
// Generated on Mon Jan 12 2015 17:57:20 GMT+0200 (IST)
var forEach = require('foreach')

var specFile = 'spec/spec.js'

var customLaunchers = {
  android4_4: {
    browserName: 'android',
    version: '4.4'
  },
  android4_3: {
    browserName: 'android',
    version: '4.3'
  },
  android4_2: {
    browserName: 'android',
    version: '4.2'
  },
  android4_1: {
    browserName: 'android',
    version: '4.1'
  },
  android4_0: {
    browserName: 'android',
    version: '4.0'
  },
  chrome: {
    browserName: 'chrome'
  },
  firefox: {
    browserName: 'firefox'
  },
  opera: {
    browserName: 'opera'
  },
  ie9: {
    browserName: 'internet explorer',
    version: '9'
  },
  ie10: {
    browserName: 'internet explorer',
    version: '10'
  },
  ie11: {
    browserName: 'internet explorer',
    version: '11'
  },
  safari8: {
    browserName: 'safari',
    version: '8'
  },
  safari7: {
    browserName: 'safari',
    version: '7'
  },
  safari6: {
    browserName: 'safari',
    version: '6'
  },
  safari5: {
    browserName: 'safari',
    version: '5'
  }
}

forEach(customLaunchers, function(launcher) {
  launcher.base = 'SauceLabs'
})

module.exports = function(config) {
  var confObject = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jasmine',
      'browserify'
    ],

    // list of files / patterns to load in the browser
    files: [specFile],

    browserify: {
      debug: true,
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          // browsers have real DOM
          bundle.exclude('jsdom')
        })
      }
    },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),

    customLaunchers: customLaunchers,

    sauceLabs: {
      testName: 'edited'
    }
  }

  confObject.preprocessors[specFile] = ['browserify']

  config.set(confObject)
}

var server = require('karma').server
var common = require('./karma-conf-common')
var getBrowsers = require('policystat-sauce-browsers')
var xtend = require('xtend')

common.reporters.push('saucelabs')

var conf = xtend(common, {
  singleRun: true,
  captureTimeout: 0
})

getBrowsers.then(function (browsers) {
  conf.customLaunchers = browsers
  conf.browsers = Object.keys(browsers)
  server.start(conf, function (exitCode) {
    process.exit(exitCode)
  })
})

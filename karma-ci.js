var server = require('karma').server
var common = require('./karma-conf-common')
var getBrowsers = require('policystat-sauce-browsers')
var xtend = require('xtend')
var forEach = require('foreach')

common.reporters.push('saucelabs')

var conf = xtend(common, {
  singleRun: true,
  captureTimeout: 0
})

getBrowsers.then(function (browsers) {
  forEach(browsers, function (browser) {
    browser.idleTimeout = '1000'
  })
  conf.customLaunchers = browsers
  conf.browsers = Object.keys(browsers)
  conf.logLevel = 'debug'
  server.start(conf, function (exitCode) {
    process.exit(exitCode)
  })
})

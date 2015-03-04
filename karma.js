var server = require('karma').server
var common = require('./karma-conf-common')
server.start(common, function (exitCode) {
  process.exit(exitCode)
})

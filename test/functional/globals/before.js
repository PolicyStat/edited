var startTestbenchServer = require('../../bench/server')

module.exports = function (done) {
  var globals = this
  startTestbenchServer.then(function (testbenchServerState) {
    globals.testbenchServerState = testbenchServerState
    globals.testbenchServerState.url = 'http://localhost:' + testbenchServerState.port + '/'
    done()
  })
}

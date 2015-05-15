var startTestbenchServer = require('../bench/server')

module.exports = function (browser, done) {
  var test = this
  startTestbenchServer.then(function (testbenchServerState) {
    test.testbenchServerState = testbenchServerState
    test.testbenchServerState.url = 'http://localhost:' + testbenchServerState.port + '/'
    done()
  })
}

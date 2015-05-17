module.exports = function () {
  var globals = this
  globals.testbenchServerState.server.close()
  console.log('testbench server closed')
}

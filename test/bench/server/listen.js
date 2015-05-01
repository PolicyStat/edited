module.exports = function (state) {
  return new Promise(function (fulfill) {
    var server = state.server
    var port = state.port
    server.listen(port, function (err) {
      if (err) {
        throw err
      } else {
        console.log('testbench server started on port ' + port)
        fulfill(state)
      }
    })
  })
}

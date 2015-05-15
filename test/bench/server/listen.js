module.exports = function (state) {
  return new Promise(function (fulfill) {
    state.listener = state.server.listen(state.port, function (err) {
      if (err) {
        throw err
      } else {
        console.log('testbench server started on port ' + state.port)
        fulfill(state)
      }
    })
  })
}

var Promise = require('promise')
var getPort = require('get-port')

module.exports = function (state) {
  return new Promise(function (fulfill) {
    getPort(function (err, port) {
      if (err) {
        throw err
      } else {
        state.port = port
        fulfill(state)
      }
    })
  })
}

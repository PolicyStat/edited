var Promise = require('promise')
var getPort = require('get-port')

module.exports = function (server) {
  return new Promise(function (fulfill) {
    getPort(function (err, port) {
      if (err) {
        throw err
      } else {
        var state = {server: server, port: port}
        fulfill(state)
      }
    })
  })
}

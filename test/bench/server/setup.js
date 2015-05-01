var Promise = require('promise')
var browserify = require('browserify-middleware')
var server = require('express')()

server.get('/', function (req, res) {
  res.send(require('./html'))
})
server.get('/index.js', browserify('./test/bench/client/index.js'))

module.exports = new Promise(function (fulfill) {
  var state = {server: server}
  fulfill(state)
})

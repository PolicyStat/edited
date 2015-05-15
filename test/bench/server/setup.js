var Promise = require('promise')
var browserify = require('browserify-middleware')
var app = require('express')()

app.get('/', function (req, res) {
  res.send(require('./html'))
})
app.get('/index.js', browserify('./test/bench/client/index.js'))

module.exports = new Promise(function (fulfill) {
  var state = {app: app}
  fulfill(state)
})

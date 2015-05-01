var browserify = require('browserify-middleware')
var testbench = require('express')()

testbench.get('/', function (req, res) {
  res.send(require('./html'))
})
testbench.get('/index.js', browserify('./test/bench/client/index.js'))

module.exports = testbench

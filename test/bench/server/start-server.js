var bench = require('express')()
var browserify = require('browserify-middleware')

module.exports = function () {
  bench.get('/', function (req, res) {
    res.send(require('./html'))
  })
  bench.get('/index.js', browserify('./test/bench/client/index.js'))
  bench.listen(8888)
}

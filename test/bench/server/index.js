var server = require('./server')
var getPort = require('./get-port')
var listen = require('./listen')

module.exports = getPort(server).then(listen)

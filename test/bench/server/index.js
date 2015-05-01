var server = require('./server')
var getPort = require('./get-port')
var listen = require('./listen')

/*
 * A promise that fulfills to the state object
 * of the running testbench server.
 *
 * Properties are:
 *  * `server` the express Application instance
 *  * `port` the port on which it is listening
 *
 *  This module can be required or run standalone
 *  (`node test/bench/server`).
 */
module.exports = getPort(server).then(listen)

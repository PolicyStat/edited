'use strict'
var isElement = require('is_element')

module.exports = function (element, cb) {
  var self = this

  if (!isElement(element)) {
    throw new Error('Expected a DOM element')
  }
  if (typeof cb !== 'function') {
    throw new Error('Expected a function')
  }
  self.element = element
  self.cb = cb
  self.listen()

  return self
}

module.exports.prototype.listen = require('./prototype/listen')
module.exports.prototype.discern = require('./prototype/discern')
module.exports.prototype.reset = require('./prototype/reset')
module.exports.prototype.detach = require('./prototype/detach')
module.exports.prototype.callback = require('./prototype/callback')

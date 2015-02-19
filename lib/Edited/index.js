'use strict'
var isElement = require('lodash.iselement')
module.exports = function (element, cb) {
  var self = this

  if (
    isElement(element) !== true &&
    // _.isElement doesn't agree with IE's body while that is OK for us
    !(element.tagName && element.tagName === 'BODY')
  ) {
    throw 'Expected a DOM element.'
  }
  if (typeof cb !== 'function') {
    throw 'Expected a function.'
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

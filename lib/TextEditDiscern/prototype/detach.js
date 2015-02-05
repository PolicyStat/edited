'use strict'

var off = require('dom-events').off
var TEXT_ALTERING_EVENT_TYPES = require('../../text-altering-event-types')

module.exports = function() {
  var self = this

  TEXT_ALTERING_EVENT_TYPES.forEach(function(type) {
    off(self.element, type, self.listener)
  })
}

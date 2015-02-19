'use strict'
var on
var TEXT_ALTERING_EVENT_TYPES

on = require('add-event-handler')
TEXT_ALTERING_EVENT_TYPES = require('../../text-altering-event-types')

module.exports = function () {
  var self = this

  self.listener = function (e) {
    self.discern(e)
  }

  TEXT_ALTERING_EVENT_TYPES.forEach(function (type) {
    on(self.element, type, self.listener)
  })
}

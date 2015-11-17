'use strict'
var on = require('add-event-handler')
var Combokeys = require('combokeys')
var keycode = require('keycode')
var NON_CHARACTER_EDIT_KEYS = ['backspace', 'del', 'space', 'enter']

module.exports = function () {
  var self = this

  // a combokeys instance for character addition
  self.anyCharCombokeys = new Combokeys(self.element)
  // `any-character` is a combokeys special argument that
  // calls back on any character
  self.anyCharCombokeys.bind('any-character', function () {
    self.discern('character-addition')
  })
  self.anyCharCombokeys.stopCallback = function (e) {
    if (e.charCode === keycode('space')) {
      // space is handled as a different edit type
      return true
    }
    return false
  }

  // a combokeys instance for the keys that do not insert characters
  self.nonCharCombokeys = new Combokeys(self.element)
  NON_CHARACTER_EDIT_KEYS.forEach(function (key) {
    self.nonCharCombokeys.bind(key, function (e) {
      self.discern(key)
    })
  })
  // combokeys by default does not callback when the element is editable.
  // usually, that is desirable. In this case we expect the element to
  // always be editable.
  self.nonCharCombokeys.stopCallback = function () { return false }

  // handle the non-keyboard edit types
  // TODO: handle "cut"
  ;['paste', 'drop'].forEach(function (type) {
    on(self.element, type, function () {
      self.discern(type)
    })
  })
}

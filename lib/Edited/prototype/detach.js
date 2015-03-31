'use strict'

var off = require('dom-events').off

module.exports = function () {
  var self = this

  self.anyCharCombokeys.detach()
  self.nonCharCombokeys.detach()

  ;['paste', 'drop'].forEach(function (type) {
    off(self.element, type, self.listener)
  })
}

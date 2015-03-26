'use strict'

module.exports = function () {
  var self = this
  if (self.onAny) {
    self.onAny()
  }
}

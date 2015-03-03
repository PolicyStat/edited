'use strict'

module.exports = function () {
  var self = this
  ;(self.onAny || function () {}).call(self)
}

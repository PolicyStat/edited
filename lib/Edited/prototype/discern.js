'use strict'

module.exports = function (type) {
  var self = this
  self.callbackAny()
  self.previousEditType = self.lastEditType
  self.lastEditType = type
  if (!self.previousEditType) return
  if (
    self.lastEditType !== self.previousEditType ||
    self.lastEditType === 'paste' ||
    self.lastEditType === 'drop'
  ) {
    self.callbackSensible()
  }
}

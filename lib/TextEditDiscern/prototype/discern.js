'use strict'
var getType = require('../../textEditType')

module.exports = function (e) {
  var self = this
  self.previousEditType = self.lastEditType
  self.lastEditType = getType(e)
  if (
    self.lastEditType !== self.previousEditType ||
    self.lastEditType === 'paste' ||
    self.lastEditType === 'drop'
  ) {
    if (self.lastEditType === 'drop') {
      // Callback after default action
      setTimeout(function() {
        self.callback()
      }, 0)
    } else {
      self.callback()
    }
  }
}

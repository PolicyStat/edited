'use strict'
var getType = require('../../textEditType')

module.exports = function (e) {
  var self = this
  var type = getType(e)
  if (!type) {
    // will not cause native edit
    return
  }
  self.previousEditType = self.lastEditType
  self.lastEditType = type
  if (
    self.lastEditType !== self.previousEditType ||
    self.lastEditType === 'paste' ||
    self.lastEditType === 'drop'
  ) {
    self.callback()
  }
}

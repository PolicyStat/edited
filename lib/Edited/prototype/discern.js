'use strict'

module.exports = function (type) {
  var self = this
  if (type !== 'click' && type !== 'arrow-key') {
    // click only serves to indicate that
    // a selection change probably occurs next.
    // keeping track of selection is much more complex
    // so we just assume that selection was changed
    self.callbackAny()
  }
  self.previousEditType = self.lastEditType
  self.lastEditType = type
  if (!self.previousEditType) return
  if (type === 'click' || type === 'arrow-key') {
    // there was likely no edit
    // ―only selection change
    return
  }
  if (
    self.lastEditType !== self.previousEditType ||
    self.lastEditType === 'paste' ||
    self.lastEditType === 'drop'
  ) {
    self.callbackSensible()
  }
}

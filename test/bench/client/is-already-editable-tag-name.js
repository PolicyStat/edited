var alreadyEditableElementsTagNames = require('./already-editable-elements-tag-names')

// returns `true` if the provided `tagName` is an already–editable one
module.exports = function (tagName) {
  if (alreadyEditableElementsTagNames.indexOf(tagName) === -1) {
    return false
  }
  return true
}

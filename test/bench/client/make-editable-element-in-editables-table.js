var createEditableElement = require('./create-editable-element')
var makeEditableElementEditable = require('./make-editable-element-editable')

module.exports = function (tag, $tagRow) {
  var $editableElement = createEditableElement(tag)
  $tagRow.find('td.element').append($editableElement)
  makeEditableElementEditable($editableElement)
}

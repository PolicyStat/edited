var createEditableElement = require('./create-editable-element')
var makeEditableElementEditable = require('./make-editable-element-editable')

module.exports = function ($editablesTable, tag) {
  var $editableElement = createEditableElement(tag)
  $editablesTable.find('tr.' + tag + ' td.element')
    .append($editableElement)
  makeEditableElementEditable($editableElement)
}

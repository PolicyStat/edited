var $ = require('jquery')
var stylizeEditableElement = require('./stylize-editable-element')
var makeEditableElementEditable = require('./make-editable-element-editable')

module.exports = function ($editablesTable, tag) {
  var $editableElement = $('<' + tag + ' class="editable-element">')
  $editablesTable.find('tr.' + tag + ' td.element')
    .append($editableElement)
  stylizeEditableElement($editableElement)
  makeEditableElementEditable($editableElement)
}

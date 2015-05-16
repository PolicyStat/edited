var $ = require('jquery')
var stylizeEditableElement = require('./stylize-editable-element')
var makeEditableElementEditable = require('./make-editable-element-editable')
var alreadyEditableElementsTags = require('./already-editable-elements-tags')

module.exports = function ($editablesTable, tag) {
  var $editableElement = $('<' + tag + ' class="editable-element">')
  $editablesTable.find('tr.' + tag + ' td.element')
    .append($editableElement)
  stylizeEditableElement($editableElement)
  if (alreadyEditableElementsTags.indexOf(tag) === -1) {
    makeEditableElementEditable($editableElement)
  }
}

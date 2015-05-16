var $ = require('jquery')
var stylizeEditableElement = require('./stylize-editable-element')
var addInitialTextToEditableElement = require('./add-initial-text-to-editable-element')

module.exports = function (tag) {
  var $editableElement = $('<' + tag + ' class="editable-element">')
  addInitialTextToEditableElement($editableElement)
  stylizeEditableElement($editableElement)
  return $editableElement
}

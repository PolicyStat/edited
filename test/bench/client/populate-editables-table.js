var createEditablesTableStructure = require('./create-editables-table-structure')
var makeEditableElementInEditablesTable = require('./make-editable-element-in-editables-table')
var instantiateEditedOnEditableElement = require('./instantiate-edited-on-editable-element')
var editablesTags = require('./editable-tags')

module.exports = function ($editablesTable) {
  editablesTags.forEach(function (tag) {
    createEditablesTableStructure($editablesTable, tag)
    makeEditableElementInEditablesTable($editablesTable, tag)
    instantiateEditedOnEditableElement($editablesTable, tag)
  })
}

var alreadyEditableElementsTags = require('./already-editable-elements-tags')

module.exports = function ($editableElement) {
  if ($editableElement.is(alreadyEditableElementsTags.join())) {
    return
  }
  $editableElement.attr('contentEditable', true)
}

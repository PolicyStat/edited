module.exports = function ($editableElement) {
  if (!$editableElement.is('textarea')) {
    $editableElement.attr('contentEditable', true)
  }
}

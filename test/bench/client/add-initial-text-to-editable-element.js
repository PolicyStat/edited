var initialText = 'initial text'

module.exports = function ($editableElement) {
  if ($editableElement.is('input')) {
    $editableElement.val(initialText)
  } else {
    $editableElement.html(initialText)
  }
}

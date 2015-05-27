var isAlreadyEditableTagName = require('../../is-already-editable-tag-name')

/*
 * This adds some initial text to the editaable element.
 * We are using the DOM directly and not React because we would like
 * the contents of the editable element (the children) to not be managed
 * by React. Otherwise, React would reset them on state changes.
 */

module.exports = function () {
  if (isAlreadyEditableTagName(this.props.selectedTagName)) {
    // in already–editable elements the initial text is set in a different manner
    return
  }
  this.getEditableDomElement()
    .appendChild(document.createTextNode(this.initialText))
}

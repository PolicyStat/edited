var React = require('react')

var isAlreadyEditableTagName = require('../../is-already-editable-tag-name')

// renders the editable element
module.exports = function () {
  var selectedTagName = this.props.selectedTagName
  var editableElementProps = {
    key: 'element',
    id: 'editable-element',
    style: {
      borderColor: 'magenta',
      borderWidth: '3px',
      borderStyle: 'dotted'
    }
  }
  if (isAlreadyEditableTagName(selectedTagName)) {
    // this is how we set the initial text on already editable elements
    // such as `textarea` and `input`
    editableElementProps.defaultValue = this.initialText
  } else {
    editableElementProps.contentEditable = 'true'
  }
  // a container
  return React.createElement(
    'div', null, [
      React.createElement('h2', {key: 'heading'}, 'An Editable Element'), // a heading
      React.createElement(selectedTagName, editableElementProps) // the editable element itself
    ]
  )
}

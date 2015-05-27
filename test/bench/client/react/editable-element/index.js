var React = require('react')

var render = require('./render')
var initializeTextContent = require('./initialize-text-content')
var instantiateEditedOnElement = require('./instantiate-edited-on-element')

// a container for the editable element
module.exports = React.createClass({
  displayName: 'EditableElement',
  render: render,
  initialText: 'Initial text',
  componentDidMount: function () {
    this.initializeDomElement()
  },
  componentDidUpdate: function () {
    this.initializeDomElement()
  },
  initializeTextContent: initializeTextContent,
  // returns the DOM node of the editable element itself
  getEditableDomElement: function () {
    return React.findDOMNode(this)
      .childNodes[1]
  },
  instantiateEditedOnElement: instantiateEditedOnElement,
  initializeDomElement: function () {
    this.initializeTextContent()
    this.instantiateEditedOnElement()
  },
  shouldComponentUpdate: function (nextProps) {
    if (this.props.selectedTagName === nextProps.selectedTagName) {
      // This happens when the selected tagName selector is reselected.
      // An update would cause a re-initialization of the editable element's
      // text content. We desire that only when the tagName is changed.
      return false
    }
    return true
  }
})

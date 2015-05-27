var React = require('react')

var PageHeading = require('../page-heading')
var PageDescription = require('../page-description')
var TestElementTagNameSelector = require('../test-element-tag-name-selector')
var EditableElement = require('../editable-element')
var CallbackReporter = require('../callback-reporter')
var ResetButton = require('../reset-button')

var name = 'edited'
var url = 'https://github.com/PolicyStat/edited'

// renders the root app
module.exports = function () {
  // the default children of the root container
  var children = [
    // the page heading
    React.createElement(PageHeading, {
      key: 'heading',
      name: name,
      url: url}),
    // the page description
    React.createElement(PageDescription, {
      key: 'description',
      name: name}),
    // interface for selecting the `tagName`
    React.createElement(TestElementTagNameSelector, {
      key: 'selector',
      selectedTagName: this.state.selectedTagName,
      setSelectedTagName: this.setSelectedTagName,
      callbackCountResetter: this.resetCallbackCounters})
  ]
  // when a `tagName` is selected, the root app container has these
  // additional children
  var additionalChildrenWhenTagNameSelected = [
    // the editble element
    React.createElement(EditableElement, {
      key: 'element',
      selectedTagName: this.state.selectedTagName,
      callbackCountIncrementer: this.incrementCallbackCounter}),
    // shows the callback counts
    React.createElement(CallbackReporter, {
      key: 'reporter',
      callbackCounts: this.state.callbackCounts}),
    // a button for resetting the callback counts
    React.createElement(ResetButton, {
      key: 'reset',
      callbackCountResetter: this.resetCallbackCounters})
  ]

  if (this.state.selectedTagName) {
    children = children.concat(additionalChildrenWhenTagNameSelected)
  }

  // the root element
  return React.createElement('div', {style: {fontSize: '2em'}}, children)
}

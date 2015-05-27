var React = require('react')

var TagNameRadioButton = require('../tag-name-radio-button')
var TEST_ELEMENTS_TAG_NAMES = require('../../../client/test-elements-tag-names')

// renders the interface for selecting the `tagName`
module.exports = function () {
  var element = this
  // the children of the `fieldset` element
  var fieldsetChildren = []

  fieldsetChildren.push(
    // instructions for people
    React.createElement('legend', {key: '_legend'}, 'Select a tagName'))

  // create the radio buttons, one per each `tagName` that we test on
  var tagNameRadioButtons = TEST_ELEMENTS_TAG_NAMES.map(function (tagName) {
    return React.createElement(
      TagNameRadioButton, {
        key: 'button:' + tagName,
        tagName: tagName,
        selectedTagName: element.props.selectedTagName,
        setSelectedTagName: element.props.setSelectedTagName,
        callbackCountersResetter: element.props.callbackCountResetter
      }
    )
  })

  fieldsetChildren = fieldsetChildren.concat(tagNameRadioButtons)

  // the containing form
  return React.createElement(
    'form', null,
    React.createElement(
      'fieldset', {id: 'test-element-tag-name-selector'}, fieldsetChildren
    ))
}

var editableElementSelector = require('../../editable-element-selector.js')
var isAlreadyEditableTagName = require('../../../bench/client/is-already-editable-tag-name')

// asserts that the editable element is editable
module.exports = function () {
  var browser = this.browser

  browser.page.testbench()
    // check for the `contenteditable` attribute
    .getEditableElementTagName(function (editableElementTagName) {
      if (isAlreadyEditableTagName(editableElementTagName)) {
        // `contenteditable` attribute is only set on elements that are
        // not already editable
        return
      }

      browser.assert.attributeEquals(
        editableElementSelector, 'contenteditable', 'true',
        'Editable element\'s `contenteditable` attribute is `true`')
    })

  // test by editing
  browser.page.testbench()
    .getEditableElementTextContent(function (editableElementTextContent) {
      var textToTypeInEditableElement = '—this is editable'

      // type in the element
      browser.page.testbench()
        .typeInEditableElement(textToTypeInEditableElement)

      // assert result
      browser.page.testbench()
        .assertEditableElementTextContentIs(
          editableElementTextContent + textToTypeInEditableElement)
    })

  return browser
}

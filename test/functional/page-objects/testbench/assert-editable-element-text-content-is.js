// asserts that the editable element's text content is `expectedEditableElementTextContent`
module.exports = function (expectedEditableElementTextContent) {
  var browser = this.browser

  var callback = function (editableElementTextContent) {
    browser.assert.strictEqual(
      editableElementTextContent,
      expectedEditableElementTextContent,
      'Editable element\'s text is "' + expectedEditableElementTextContent + '"')
  }

  browser.page.testbench()
    .getEditableElementTextContent(callback)

  return browser
}

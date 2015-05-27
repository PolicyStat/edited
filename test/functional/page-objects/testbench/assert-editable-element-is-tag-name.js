// asserts that the editable element is of `tagName`
module.exports = function (expectedTagName) {
  var browser = this.browser

  browser.page.testbench()
    .getEditableElementTagName(function (editableElementTagName) {
      browser.assert.strictEqual(
        editableElementTagName, expectedTagName,
        'Editable element tagName is `' + expectedTagName + '`')
    })

  return browser
}

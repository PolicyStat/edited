var editableElementSelector = require('../../editable-element-selector')

// asserts that the editable element is not present
module.exports = function () {
  var browser = this.browser

  browser.assert.elementNotPresent(
    editableElementSelector,
    'Editable element is not present')

  return browser
}

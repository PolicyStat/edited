var editableElementSelector = require('../../editable-element-selector')

module.exports = function () {
  var browser = this.browser
  browser.assert.visible(editableElementSelector, 'Editable element is visible')
  return browser
}

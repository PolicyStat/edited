var path = require('path')
var getEditableElementSelector = require(path.resolve('test/functional/get-editable-element-selector'))

module.exports = function (tag) {
  var editableElementSelector = getEditableElementSelector(tag)
  var browser = this.browser
  browser.assert.visible(editableElementSelector, 'editable element is visible')
  return browser
}

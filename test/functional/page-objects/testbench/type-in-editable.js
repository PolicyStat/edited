var path = require('path')
var getEditableElementSelector = require(path.resolve('test/functional/get-editable-element-selector'))
module.exports = function (tag, sequence) {
  var browser = this.browser
  var editableElementSelector = getEditableElementSelector(tag)
  this.getWDElementID(editableElementSelector, function (editableElementId) {
    browser.page.testbench().typeInElement(editableElementId, sequence)
  })
  return browser
}

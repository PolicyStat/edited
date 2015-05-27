var editableElementSelector = require('../../editable-element-selector')

// types the provided `sequence` in the editable element by focusing at the end of it
// and using http://nightwatchjs.org/api#keys
module.exports = function (sequence) {
  var browser = this.browser
  browser.page.testbench().typeInElement(editableElementSelector, sequence)
  return browser
}

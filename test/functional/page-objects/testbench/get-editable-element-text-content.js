var editableElementSelector = require('../../editable-element-selector')
var isAlreadyEditableTagName = require('../../../bench/client/is-already-editable-tag-name')

// calls the `callback` with the editable element's text content as only argument
module.exports = function (callback) {
  var browser = this.browser

  browser.page.testbench()
    .getEditableElementTagName(function (editableElementTagName) {
      // there are two ways to get the text content, depending on whether
      // the editable element is an already editable element or `contentEditable`
      var getMethod = isAlreadyEditableTagName(editableElementTagName) ?
        'getValue' : 'getText'

      browser[getMethod](editableElementSelector, function (result) {
        browser.assert.strictEqual(result.status, 0, 'Got editable element\'s text')

        callback(result.value)
      })
    })

  return browser
}

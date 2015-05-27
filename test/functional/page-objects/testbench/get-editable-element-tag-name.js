var editableElementSelector = require('../../editable-element-selector')

// calls the `callback` with the editable element's `tagName` is single argument
module.exports = function (callback) {
  var browser = this.browser

  browser.getTagName(editableElementSelector, function (result) {
    browser.assert.strictEqual(result.status, 0, 'Got editable element tagName')
    var editableElementTagName = result.value.toLowerCase()

    callback(editableElementTagName)
  })

  return browser
}

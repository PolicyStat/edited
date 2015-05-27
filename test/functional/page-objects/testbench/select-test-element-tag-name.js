var getTagNameSelectorButtonSelectorOfTagName = require('../../get-tag-name-selector-button-selector-of-tag-name')

// selects the test element's `tagName`
module.exports = function (tagName) {
  var browser = this.browser

  var selector = getTagNameSelectorButtonSelectorOfTagName(tagName)

  browser.click(selector, function (result) {
    this.assert.strictEqual(result.status, 0, 'Selected tagName `' + tagName + '`')
  })

  return browser
}

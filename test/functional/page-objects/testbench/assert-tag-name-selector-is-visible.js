var tagNameSelectorSelector = require('../../tag-name-selector-selector')

// asserts that the interface that contains the `tagName` radio buttons is visible
module.exports = function () {
  var browser = this.browser

  browser.assert.visible(tagNameSelectorSelector, 'tagName selector is visible')

  return browser
}

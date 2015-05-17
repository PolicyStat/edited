var path = require('path')
var getTagRowSelector = require(path.resolve('test/functional/get-tag-row-selector'))

module.exports = function (tag) {
  var tagRowSelector = getTagRowSelector(tag)
  var browser = this.browser
  browser.assert.visible(tagRowSelector, tag + '\'s row is visible')
  return browser
}

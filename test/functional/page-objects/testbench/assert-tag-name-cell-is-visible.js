var path = require('path')
var getTagNameCellSelector = require(path.resolve('test/functional/get-tag-name-cell-selector'))

module.exports = function (tag) {
  var tagNameCellSelector = getTagNameCellSelector(tag)
  var browser = this.browser
  browser.assert.visible(tagNameCellSelector, 'tagName cell is visible')
  return browser
}

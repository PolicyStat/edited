var getTagRowSelector = require('./get-tag-row-selector')
module.exports = function (tag) {
  var tagRowSelector = getTagRowSelector(tag)
  return tagRowSelector + ' .editable-element'
}

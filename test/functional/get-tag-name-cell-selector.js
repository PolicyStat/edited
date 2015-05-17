var getTagRowSelector = require('./get-tag-row-selector.js')
module.exports = function (tag) {
  var tagRowSelector = getTagRowSelector(tag)
  return tagRowSelector + ' td.tag'
}

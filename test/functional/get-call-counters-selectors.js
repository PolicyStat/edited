var getTagRowSelector = require('./get-tag-row-selector')
module.exports = function (tag) {
  var tagRowSelector = getTagRowSelector(tag)
  var callbackTypes = ['sensible', 'any']
  var callCountersSelectors = new Map()
  callbackTypes.forEach(function (type) {
    callCountersSelectors.set(type, tagRowSelector + ' .report.on-' + type)
  })
  return callCountersSelectors
}

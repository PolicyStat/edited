var path = require('path')
var getCallCountersSelectors = require(path.resolve('test/functional/get-call-counters-selectors'))

module.exports = function (tag) {
  var callCountersSelectors = getCallCountersSelectors(tag)
  var browser = this.browser
  for (var type of callCountersSelectors.keys()) {
    browser.assert.visible(
      callCountersSelectors.get(type),
      'call counter of type `' + type + '` is visible'
    )
  }
  return browser
}

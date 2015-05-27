var getCallbackCounterSelectorOfType = require('../../get-callback-counter-selector-of-type')

// asserts that callback counters for each of the callback types are visible
module.exports = function () {
  var browser = this.browser

  browser.page.testbench().forEachCallbackType(function (callbackType) {
    var selector = getCallbackCounterSelectorOfType(callbackType)
    browser.assert.visible(selector, 'Callback counter ' + callbackType + ' is visible')
  })

  return browser
}

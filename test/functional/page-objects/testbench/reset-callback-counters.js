var resetButonSelector = require('../../reset-button-selector')

// resets the callback counters
module.exports = function () {
  var browser = this.browser

  browser.click(resetButonSelector, function (result) {
    browser.assert.strictEqual(result.status, 0, 'Callback count reset button clicked')
  })
  browser.page.testbench().forEachCallbackType(function (callbackType) {
    browser.page.testbench().assertCallbackCountOfTypeIs(callbackType, 0)
  })

  return browser
}

var callbackReporterSelector = require('../../callback-reporter-selector')

// calls `callback` with the callback count of `callbackType` as single argument
module.exports = function (callbackType, callback) {
  var browser = this.browser

  var callbackCounterSelector = callbackReporterSelector + ' .' + callbackType + ' .count'

  browser.getText(callbackCounterSelector, function (result) {
    browser.assert.strictEqual(
      result.status, 0,
      'got call count ' + callbackType + ' result')
    browser.assert.ok(
      typeof result.value === 'string',
      'call count result value is a string')
    browser.assert.strictEqual(
      isNaN(result.value), false,
      'call count result value is essentially a number')

    callback(+result.value)
  })

  return browser
}

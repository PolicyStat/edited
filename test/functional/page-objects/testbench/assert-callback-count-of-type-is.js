// asserts that callback count of callback type `callbackType` is `expectedCallbackCount`
module.exports = function (callbackType, expectedCallbackCount) {
  var browser = this.browser

  var callback = function (callbackCount) {
    browser.assert.strictEqual(
      callbackCount, expectedCallbackCount,
      'Counted callbacks of type ' + callbackType + ': ' + expectedCallbackCount)
  }

  this.getCallbackCountOfType(callbackType, callback)

  return browser
}

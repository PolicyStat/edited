// checks the callback count, calls `increaser` and then checks again
// and asserts that after is greater than before.
// in other words, that calling `increaser` results in an increase
module.exports = function (increaser, callbackType) {
  var browser = this.browser
  var before, after

  // get before value
  this.getCallbackCountOfType(callbackType, function (callbackCount) {
    before = callbackCount
  })

  // run provided increaser function
  this.browser.perform(function () {
    increaser()
  })

  // get after value
  this.getCallbackCountOfType(callbackType, function (callbackCount) {
    after = callbackCount
  })

  this.browser.perform(function () {
    browser.assert.ok(
      after > before,
      'Callback count of ' + callbackType + ' was increased')
  })

  return this
}

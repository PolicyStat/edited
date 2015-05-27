var CALLBACK_TYPES = require('../../../bench/client/callback-types')

// calls `iteratee` on each callback type
module.exports = function (iteratee) {
  var browser = this.browser

  browser.perform(function () {console.log('\n ## Iterating over callback types')})
  CALLBACK_TYPES.forEach(function (callbackType) {
    browser.perform(function () {console.log('\n ### ' + callbackType)})
    iteratee(callbackType)
  })

  return browser
}

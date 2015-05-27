var callbackReporterSelector = require('../../callback-reporter-selector')

// asserts that the callback reporter container is not present
module.exports = function () {
  var browser = this.browser
  browser
    .assert.elementNotPresent(callbackReporterSelector, 'Callback reporter not present')

  return browser
}

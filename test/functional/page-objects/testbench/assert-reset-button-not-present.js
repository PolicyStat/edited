var resetButtonSelector = require('../../reset-button-selector')

// asserts that the reset button is not present
module.exports = function () {
  var browser = this.browser

  browser.assert.elementNotPresent(resetButtonSelector, 'Reset button is not present')

  return browser
}

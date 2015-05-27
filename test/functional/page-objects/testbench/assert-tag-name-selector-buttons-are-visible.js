var getTagNameSelectorButtonSelectorOfTagName = require('../../get-tag-name-selector-button-selector-of-tag-name')

// asserts that the `tagName` selector buttons are all visible
module.exports = function () {
  var browser = this.browser

  browser.page.testbench()
    .forEachTestElementTagName(function (testElementTagName) {
      var selector = getTagNameSelectorButtonSelectorOfTagName(testElementTagName)
      browser.assert.visible(
        selector,
        '`' + testElementTagName + '` button is visible')
    })

  return browser
}

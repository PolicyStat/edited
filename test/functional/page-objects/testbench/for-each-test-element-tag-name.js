var TEST_ELEMENTS_TAG_NAMES = require('../../../bench/client/test-elements-tag-names')

// calls iteratee for each `tagName` that we test on
module.exports = function (iteratee) {
  var browser = this.browser

  browser.perform(function () {console.log('\n ## Iterating over editable tagNames')})

  TEST_ELEMENTS_TAG_NAMES.forEach(function (testElementTagName) {
    browser.perform(function () {console.log('\n ### ' + testElementTagName)})
    iteratee(testElementTagName)
  })

  return browser
}

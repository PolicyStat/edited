// asserts that the `tagName` radio buttons cause the editable element to be replaced
module.exports = function () {
  var browser = this.browser

  browser.page.testbench()
    .forEachTestElementTagName(function (testElementTagName) {
      browser.page.testbench().selectTestElementTagName(testElementTagName)
      browser.page.testbench().assertEditableElementIsVisible()
      browser.page.testbench().assertEditableElementIsTagName(testElementTagName)
    })

  return browser
}

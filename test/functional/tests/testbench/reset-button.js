this['Reset button'] = function (browser) {
  browser.page.testbench().navigateTo()

  browser.page.testbench().forEachTestElementTagName(function (testElementTagName) {
    browser.page.testbench().selectTestElementTagName(testElementTagName)
      .page.testbench().typeInEditableElement('. now greater than zero')
      .page.testbench().resetCallbackCounters()
      .page.testbench().forEachCallbackType(function (callbackType) {
        browser.page.testbench().assertCallbackCountOfTypeIs(callbackType, 0)
      })
  })
  browser.end()
}

this['Callback reporter'] = function (browser) {
  browser.page.testbench().navigateTo()

  var increaser = function () {
    browser.page.testbench()
      .typeInEditableElement('—increase counters')
  }

  browser.page.testbench()
    .forEachTestElementTagName(function (testElementTagName) {
      browser.page.testbench().selectTestElementTagName(testElementTagName)
      browser.page.testbench().assertCallbackCountersAreVisible()

      browser.page.testbench().forEachCallbackType(function (callbackType) {
        browser.page.testbench()
          .assertCallbackCountOfTypeWasIncreased(increaser, callbackType)
      })
    })

  browser.end()
}

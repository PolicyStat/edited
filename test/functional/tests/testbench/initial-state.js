this['Initial state'] = function (browser) {
  browser
    .page.testbench().navigateTo()
    .page.testbench().assertEditableElementNotPresent()
    .page.testbench().assertCallbackReporterNotPresent()
    .page.testbench().assertResetButtonNotPresent()
    .end()
}

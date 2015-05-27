this['Editable element'] = function (browser) {
  browser
    .page.testbench().navigateTo()

    .page.testbench().forEachTestElementTagName(function (testElementTagName) {
      browser
        .page.testbench().selectTestElementTagName(testElementTagName)
        .page.testbench().assertEditableElementIsVisible(testElementTagName)
        .page.testbench().assertEditableElementIsEditable()
    })

  browser.end()
}

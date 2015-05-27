this['tagName selector'] = function (browser) {
  browser
    .page.testbench().navigateTo()
    .page.testbench().assertTagNameSelectorIsVisible()
    .page.testbench().assertTagNameSelectorButtonsAreVisible()
    .page.testbench().assertTagNameSelectorSetsEditableElement()
    .end()
}

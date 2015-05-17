this['Editables table is visible'] = function (browser) {
  browser
    .page.testbench().navigateTo()
    .page.testbench().assertTableIsVisible()
    .end()
}

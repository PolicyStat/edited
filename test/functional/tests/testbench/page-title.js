this['Page title'] = function (browser) {
  browser
    .page.testbench().navigateTo()
    .assert.title('edited Test Bench')
    .end()
}

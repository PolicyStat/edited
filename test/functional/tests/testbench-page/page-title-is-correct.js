this['Page title is correct'] = function (browser) {
  browser
    .page.testbench().navigateTo()
    .assert.title('edited Test Bench')
    .end()
}

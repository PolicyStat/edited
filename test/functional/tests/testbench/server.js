this['Testbench page is loaded'] = function (browser) {
  browser
    .page['testbench-server']().goTo()
    .assert.title('edited Test Bench')
    .end()
}

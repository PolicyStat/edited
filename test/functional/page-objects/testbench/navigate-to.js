module.exports = function () {
  var browser = this.browser
  browser
    .url('http://localhost:' + browser.globals.testbenchServerState.port)
    .waitForElementVisible('body')

  return browser
}

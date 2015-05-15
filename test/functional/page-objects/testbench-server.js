module.exports = function (browser) {
  this.goTo = function () {
    browser
      .url('http://localhost:' + browser.globals.testbenchServerState.port)
      .waitForElementVisible('body')

    return browser
  }
}

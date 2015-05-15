var beforeTest = require('../before-test')
var afterTest = require('../after-test')

module.exports = {
  before: beforeTest,
  after: afterTest,
  'step one': function (browser) {
    var test = this
    browser
      .url(test.testbenchServerState.url)
      .waitForElementVisible('body', 1000)
      .assert.title('edited Test Bench')
  },
  'step two': function (browser) {
    browser
      .assert.visible('#editables')
  },
  'step three': function (browser) {
    browser
      .assert.visible('body')
      .end()
  }
}


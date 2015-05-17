module.exports = function (tag, type, expectedCount) {
  var browser = this.browser

  var callback = function (count) {
    browser.assert.equal(count, expectedCount, count + ' ' + type + ' calls')
  }
  this.getCallCount(tag, type, callback)

  return browser
}

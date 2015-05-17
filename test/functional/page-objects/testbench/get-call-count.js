module.exports = function (tag, type, callback) {
  var browser = this.browser

  var counterSelector = 'tr.' + tag + ' .report.on-' + type
  browser.getText(counterSelector, function (result) {
    browser.assert.equal(result.status, 0, 'got ' + type + ' call count result')
    browser.assert.equal(
      typeof result.value === 'string', true,
      'call count result value is a string')
    browser.assert.equal(
      isNaN(result.value), false,
      'call count result value is essentially a number')
    callback(+result.value)
  })

  return browser
}

module.exports = function (elementSelector, callback) {
  var browser = this.browser
  browser.element('css selector', elementSelector, function (result) {
    browser.assert.strictEqual(
      result.status, 0, 'got editable element ID')
    callback(result.value.ELEMENT)
  })
  return browser
}

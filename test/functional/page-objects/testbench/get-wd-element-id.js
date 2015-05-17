module.exports = function (selector, callback) {
  var browser = this.browser
  browser.element('css selector', selector, function (result) {
    browser.assert.equal(
      result.status, 0, 'got editable element ID')
    callback(result.value.ELEMENT)
  })
  return browser
}

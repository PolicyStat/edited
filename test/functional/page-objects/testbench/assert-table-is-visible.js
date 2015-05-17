module.exports = function () {
  var browser = this.browser
  browser.assert.visible('table#editables', 'editables table is visible')
  return browser
}

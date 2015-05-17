module.exports = function (tag, text) {
  var browser = this.browser
  var editableElementSelector = 'tr.' + tag + ' .editable-element'
  var callback = function (result) {
    this.assert.equal(result.status, 0, 'got editable element\'s text')
    this.assert.equal(result.value, text, 'editable element\'s text is "' + text + '"')
  }

  var getMethod = tag === 'textarea' || tag === 'input' ? 'getValue' : 'getText'
  browser[getMethod](editableElementSelector, callback)
  return browser
}

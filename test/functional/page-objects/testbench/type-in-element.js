module.exports = function (elementId, sequence) {
  if (typeof sequence === 'string') {
    sequence = [sequence]
  }
  var browser = this.browser
  var KEYS = browser.Keys
  sequence.unshift(KEYS.CONTROL, KEYS.END, KEYS.CONTROL)
  browser
    .moveTo(elementId)
    .mouseButtonDown()
    .mouseButtonUp()
    .keys(sequence)
  return browser
}

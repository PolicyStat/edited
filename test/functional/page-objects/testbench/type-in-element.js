// types in the provided `sequence` in the element located using CSS `elementSelector`
// prepends the `CONTROL+END` key to the sequence in order to set the caret at the end
// `sequence` is explained at http://nightwatchjs.org/api#keys
module.exports = function (elementSelector, sequence) {
  if (typeof sequence === 'string') {
    sequence = [sequence]
  }
  var browser = this.browser
  var KEYS = browser.Keys

  // set caret at the end of text
  sequence.unshift(KEYS.CONTROL, KEYS.END, KEYS.CONTROL)

  browser.page.testbench()
    .getWDElementID(elementSelector, function (wdElementID) {
      browser
        .moveTo(wdElementID)
        .mouseButtonDown()
        .mouseButtonUp()
        .keys(sequence)
    })

  browser.perform(function () {
    console.log(' ✔ typed in element')
  })

  return browser
}

module.exports = function (tag) {
  var browser = this.browser
  var onSensibleCountBeforeTyping
  var onAnyCountBeforeTyping
  browser
    .page.testbench().getCallCountSensible(tag, function (count) {
      onSensibleCountBeforeTyping = count
    })
    .page.testbench().getCallCountAny(tag, function (count) {
      onAnyCountBeforeTyping = count
    })

    .page.testbench().typeInEditable(tag, ' sensible.')

    .page.testbench().getCallCountSensible(tag, function (count) {
      browser.assert.equal(
        onSensibleCountBeforeTyping < count, true,
        '`sensible` calls were counted')
    })
    .page.testbench().getCallCountAny(tag, function (count) {
      browser.assert.equal(
        onAnyCountBeforeTyping < count, true,
        '`any` calls were counted')
    })
}

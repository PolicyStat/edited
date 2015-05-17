module.exports = function (tag) {
  var browser = this.browser
  var text = ' and something more'

  this.typeInEditable(tag, text)
  this.assertEditableTextContentIs(tag, 'initial text' + text)
  return browser
}

module.exports = function (tag, count) {
  return this.assertCallCountIs(tag, 'sensible', count)
}

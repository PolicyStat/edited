module.exports = function (tag, count) {
  return this.assertCallCountIs(tag, 'any', count)
}

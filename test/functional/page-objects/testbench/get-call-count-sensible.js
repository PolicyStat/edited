module.exports = function (tag, callback) {
  return this.getCallCount(tag, 'sensible', callback)
}

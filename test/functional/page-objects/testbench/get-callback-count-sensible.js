// calls `callback` with the callback count of `sensible` as single argument
module.exports = function (callback) {
  return this.getCallbackCountOfType('sensible', callback)
}

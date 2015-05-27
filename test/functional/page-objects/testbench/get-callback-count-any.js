// calls `callback` with the callback count of `any` as single argument
module.exports = function (callback) {
  return this.getCallbackCountOfType('any', callback)
}

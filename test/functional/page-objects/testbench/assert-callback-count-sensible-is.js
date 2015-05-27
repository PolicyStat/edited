// asserts that callback count for `sensible` is `expectedCallbackCount`
module.exports = function (expectedCallbackCount) {
  return this.assertCallbackCountOfTypeIs('sensible', expectedCallbackCount)
}

// asserts that callback count for `any` is `expectedCallbackCount`
module.exports = function (expectedCallbackCount) {
  return this.assertCallbackCountOfTypeIs('any', expectedCallbackCount)
}

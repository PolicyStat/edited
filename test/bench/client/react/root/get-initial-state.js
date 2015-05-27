// returns the initial state of the app
module.exports = function () {
  return {
    selectedTagName: null,
    callbackCounts: this.getInitialCallbackCounterState()
  }
}

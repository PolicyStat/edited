// resets the callback counters to zero
module.exports = function () {
  this.setState({
    callbackCounts: this.getInitialCallbackCounterState()
  })
}

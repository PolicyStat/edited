// increments a callback count by one
module.exports = function (callbackType) {
  var callbackCounts = this.state.callbackCounts
  callbackCounts[callbackType]++

  this.setState({
    callbackCounts: callbackCounts
  })
}

var CALLBACK_TYPES = require('../../callback-types')

// returns the initial callback count state (zero for each callback type)
module.exports = function () {
  var initialCallbackCounterState = {}
  CALLBACK_TYPES.forEach(function (callbackType) {
    initialCallbackCounterState[callbackType] = 0
  })
  return initialCallbackCounterState
}

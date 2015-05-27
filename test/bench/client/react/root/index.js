var React = require('react')

var getInitialState = require('./get-initial-state')
var getSelectedTagName = require('./get-selected-tag-name')
var render = require('./render')
var incrementCallbackCounter = require('./increment-callback-counter')
var resetCallbackCounters = require('./reset-callback-counters')
var getInitialCallbackCounterState = require('./get-initial-callback-counter-state')

// the root app
module.exports = React.createClass({
  displayName: 'Root',
  getInitialState: getInitialState,
  setSelectedTagName: getSelectedTagName,
  render: render,
  incrementCallbackCounter: incrementCallbackCounter,
  resetCallbackCounters: resetCallbackCounters,
  getInitialCallbackCounterState: getInitialCallbackCounterState
})

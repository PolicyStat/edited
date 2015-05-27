var React = require('react')
var CALLBACK_TYPES = require('../../callback-types')
var CallbackCounter = require('../callback-counter')

// a section for the callback counters
module.exports = React.createClass({
  displayName: 'CallbackReporter',
  render: function () {
    var element = this
    // a container
    return React.createElement('div', {id: 'callback-reporter'}, [
      // a heading
      React.createElement('h2', {key: 'heading'}, 'Callback Report'),
      // a list that holds a counter for each callback type
      React.createElement(
        'ul', {key: 'list'}, CALLBACK_TYPES.map(function (callbackType) {
          return React.createElement(
            'li', {key: 'li:' + callbackType, className: callbackType},
            React.createElement(
              CallbackCounter, {
                callbackType: callbackType,
                callbackCount: element.props.callbackCounts[callbackType]}))
        }))])
  }
})

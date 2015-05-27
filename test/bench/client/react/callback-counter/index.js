var React = require('react')

// shows the callback count for a callback type
module.exports = React.createClass({
  displayName: 'CallbackCounter',
  render: function () {
    var callbackType = this.props.callbackType
    var callbackCount = this.props.callbackCount
    return React.createElement('span', null, [
      // the callback type and a nbsp
      React.createElement(
        'span',
        {key: 'prefix'},
        callbackType + ':\u00a0'
      ),
      // the count
      React.createElement(
        'span',
        {key: 'count', className: 'count'},
        callbackCount.toString())
    ])
  }
})

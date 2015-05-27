var React = require('react')

// a button that resets the callback counts to zero
module.exports = React.createClass({
  displayName: 'ResetButton',
  render: function () {
    var element = this
    return React.createElement(
      'button',
      {
        id: 'reset-button',
        onClick: function () {
          element.props.callbackCountResetter()
        }
      },
      'Reset Call Counters')
  }
})

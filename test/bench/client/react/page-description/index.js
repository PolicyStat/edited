var React = require('react')

// a short description for people
module.exports = React.createClass({
  displayName: 'PageDescription',
  render: function () {
    return React.createElement(
      'p', null, 'This page is for manual and automatic browser functional testing.')
  }
})

var React = require('react')

var render = require('./render')

// an interface for selecting the `tagName`
module.exports = React.createClass({
  displayName: 'TestElementTagNameSelector',
  render: render
})

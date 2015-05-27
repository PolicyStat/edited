var React = require('react')

// a page heading for people
module.exports = React.createClass({
  displayName: 'PageHeading',
  render: function () {
    return React.createElement(
      'h1', null,
      'Test Bench for ', React.createElement('a', {href: this.props.url}, this.props.name)
    )
  }
})

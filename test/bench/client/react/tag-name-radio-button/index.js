var React = require('react')

// a radio button input for selecting one of the `tagName`s
module.exports = React.createClass({
  displayName: 'TagNameRadioButton',
  render: function () {
    var element = this
    var tagName = element.props.tagName
    var selectedTagName = element.props.selectedTagName
    // an inline container
    return React.createElement(
      'span', null, [
        // the button itself
        React.createElement(
          'input', {
            key: 'button',
            type: 'radio',
            name: 'tagName',
            value: tagName,
            // radio button checked if it is the current `tagName`
            checked: tagName === selectedTagName,
            onChange: function (event) {
              var newTagName = event.target.value
              if (newTagName === selectedTagName) {
                // actually, there was no change
                return
              }
              element.props.setSelectedTagName(event.target.value)
              element.props.callbackCountersResetter()
            }}),
        // a text label for people
        React.createElement('span', {key: 'label'}, tagName + ' ')
      ])
  }
})

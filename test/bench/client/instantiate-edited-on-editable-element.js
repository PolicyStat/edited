var Edited = require('../../..')
var onSensibleEditCallback = require('./get-on-sensible-edit-callback')
var onAnyEditCallback = require('./get-on-any-edit-callback')

module.exports = function ($tagRow) {
  var editableElement = $tagRow.find('.editable-element').get(0)
  /* eslint-disable no-new */
  new Edited(editableElement, onSensibleEditCallback, onAnyEditCallback)
  /* eslint-enable no-new */
}

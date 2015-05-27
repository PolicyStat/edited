var Edited = require('../../../../../')

// instantiates an instance of Edited on the editable element
module.exports = function () {
  var element = this
  var onSensible = function () {
    element.props.callbackCountIncrementer('sensible')
  }
  var onAny = function () {
    element.props.callbackCountIncrementer('any')
  }
  var editableDomElement = this.getEditableDomElement()
  new Edited(editableDomElement, onSensible, onAny) // eslint-disable-line no-new
}

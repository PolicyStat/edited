var keyboard = require('keysim').Keyboard.US_ENGLISH

module.exports = function (element, key) {
  keyboard.dispatchEventsForAction(key, element)
}

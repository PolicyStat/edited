var callbackReporterSelector = require('./callback-reporter-selector')

// returns a CSS selector of the callback counter of a provided callback type
module.exports = function (callbackType) {
  return callbackReporterSelector + ' .' + callbackType + ' .count'
}

var $ = require('jquery')

module.exports = function (editedInstance, callbackType) {
  var $row = $(editedInstance.element).parents('tr:first')

  var $callbackCounter = $row.find('td.callback-count span.' + callbackType)
  var currentCount = Number($callbackCounter.html())
  $callbackCounter.html(currentCount + 1)
}

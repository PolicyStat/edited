module.exports = function ($tagRow) {
  var $button = $tagRow.find('td.reset-callback-count button')
  var $callbackCounters = $tagRow.find('td.callback-count span.report')

  $button.click(function () {
    $callbackCounters.html('0')
  })
}

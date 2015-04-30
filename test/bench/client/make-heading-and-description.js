var $ = require('jquery')

module.exports = function () {
  var $body = $('body')
  $body.append('<h1>Test Bench for <a href="https://github.com/PolicyStat/edited">edited</a></h1>')
  $body.append('<p>This page is for manual and automatic browser functional testing.</p>')
}

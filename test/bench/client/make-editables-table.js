var $ = require('jquery')
var populateEditablesTable = require('./populate-editables-table')

module.exports = function () {
  var $editablesTable = $([
    '<table id="editables"><tbody>',
      '<tr>',
        '<th>Element Tag</th><th>Element (type in me!)</th><th>Callback Count</th>',
      '</tr>',
    '</tbody></table>'
  ].join('')).appendTo('body')

  populateEditablesTable($editablesTable)
}

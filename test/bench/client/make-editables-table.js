var $ = require('jquery')
var populateEditablesTable = require('./populate-editables-table')

module.exports = function () {
  var $editablesTable = $([
    /* eslint-disable indent */
    '<table id="editables"><tbody>',
      '<tr>',
        '<th>Element Tag</th>',
        '<th>Element (type in me!)</th>',
        '<th>Callback Count</th>',
        '<th>Reset Callback Count</th>',
      '</tr>',
    '</tbody></table>'
    /* eslint-enable indent */
  ].join('')).appendTo('body')

  populateEditablesTable($editablesTable)
}

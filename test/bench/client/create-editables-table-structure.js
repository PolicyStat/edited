module.exports = function ($editablesTable, tag) {
  $editablesTable.find('tbody').append([
    /* eslint-disable indent */
    '<tr class="' + tag + '">',
      '<td class="tag">' + tag + '</td>',
      '<td class="element"></td>',
      '<td class="callback-count">',
        '<ul style="list-style-type: none">',
          '<li style="white-space:nowrap;text-align:right">onSensible: <span class="report on-sensible">0</span></li>',
          '<li style="white-space:nowrap;text-align:right">onAny: <span class="report on-any">0</span></li>',
        '</ul>',
      '</td>',
      '<td style="text-align:center" class="reset-callback-count">',
        '<button>Reset</button>',
      '</td>',
    '</tr>'
    /* eslint-enable indent */
  ].join(''))
}

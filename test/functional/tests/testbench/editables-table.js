var Promise = require('bluebird')
var EDITABLE_ELEMENT_TAGS = require('../../editable-element-tags')
var getEditableRowSelector = require('../../get-editable-row-selector')

this['Editables table is visible'] = function (browser) {
  browser
    .page['testbench-server']().goTo()
    .waitForElementVisible('table#editables')

  Promise.map(EDITABLE_ELEMENT_TAGS, function (tag) {
    var editableRowSelector = getEditableRowSelector(tag)
    var divCellSelector = editableRowSelector + ' .div'
    var elementSelector = editableRowSelector + ' .editable-element'
    var onSensibleReportSelector = editableRowSelector + ' .report.on-sensible'
    var onAnyReportSelector = editableRowSelector + ' .report.on-any'

    browser
      .waitForElementVisible(editableRowSelector)
      .waitForElementVisible(editableRowSelector + ' .div')
      .waitForElementVisible(divCellSelector)
      .containsText(divCellSelector, tag)
      .waitForElementVisible(elementSelector)
      .waitForElementVisible(onSensibleReportSelector)
      .waitForElementVisible(onAnyReportSelector)
  }).then(function () {
    browser.end()
  })
}

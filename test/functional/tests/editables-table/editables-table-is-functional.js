var Promise = require('bluebird')
var EDITABLE_ELEMENT_TAGS = require('../../editable-element-tags')

this['Editables table is functional'] = function (browser) {
  browser.page.testbench().navigateTo()

  Promise.map(EDITABLE_ELEMENT_TAGS, function (tag) {
    browser
      .perform(function () {
        console.log(' ## ' + tag)
      })
      .page.testbench().assertTagRowIsVisible(tag)
      .page.testbench().assertTagNameCellIsVisible(tag)
      .page.testbench().assertTagNameCellContains(tag)
      .page.testbench().assertEditableElementIsVisible(tag)
      .page.testbench().assertCallCountersVisible(tag)
      .page.testbench().assertCallCountSensibleIs(tag, 0)
      .page.testbench().assertCallCountAnyIs(tag, 0)
      .page.testbench().assertEditableTextContentIs(tag, 'initial text')
      .page.testbench().assertEditableIsEditable(tag)
      .page.testbench().assertCallCountersCount(tag)
  }).then(function () {
    browser.end()
  })
}

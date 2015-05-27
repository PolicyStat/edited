var kebabCase = require('lodash.kebabcase')

var methodNames = [
  'navigateTo',
  'assertResetButtonNotPresent',
  'assertEditableElementNotPresent',
  'assertTagNameSelectorIsVisible',
  'assertTagNameSelectorButtonsAreVisible',
  'assertTagNameSelectorSetsEditableElement',
  'assertCallbackReporterNotPresent',
  'assertCallbackCountersAreVisible',
  'forEachTestElementTagName',
  'forEachCallbackType',
  'selectTestElementTagName',
  'assertEditableElementIsVisible',
  'assertEditableElementIsTagName',
  'assertEditableElementIsEditable',
  'assertEditableElementTextContentIs',
  'getEditableElementTagName',
  'getEditableElementTextContent',
  'getWDElementID',
  'typeInElement',
  'typeInEditableElement',
  'getCallbackCountOfType',
  'getCallbackCountSensible',
  'getCallbackCountAny',
  'assertCallbackCountOfTypeIs',
  'assertCallbackCountSensibleIs',
  'assertCallbackCountAnyIs',
  'resetCallbackCounters',
  'assertCallbackCountOfTypeWasIncreased'
]
var methods = new Map()

methodNames.forEach(function (name) {
  var requirePath = './testbench/' + kebabCase(name)
  var method = require(requirePath)
  methods.set(name, method)
})

module.exports = function (browser) {
  this.browser = browser

  for (var methodName of methods.keys()) {
    this[methodName] = methods.get(methodName)
  }
}

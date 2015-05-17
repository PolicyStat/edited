var kebabCase = require('lodash.kebabcase')

var methodNames = [
  'navigateTo',
  'assertTableIsVisible',
  'assertTagRowIsVisible',
  'assertTagNameCellIsVisible',
  'assertTagNameCellContains',
  'assertEditableElementIsVisible',
  'assertCallCountersVisible',
  'getWDElementID',
  'typeInElement',
  'typeInEditable',
  'assertEditableIsEditable',
  'assertEditableTextContentIs',
  'getCallCount',
  'getCallCountSensible',
  'getCallCountAny',
  'assertCallCountIs',
  'assertCallCountSensibleIs',
  'assertCallCountAnyIs',
  'assertCallCountersCount'
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

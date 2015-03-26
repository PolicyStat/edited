/* eslint-env jasmine */

var makeEditableElement = require('./make-editable-element')
var Edited = require('../../..')

module.exports = function (
  testPair,
  // e.g `'FLF'`: former, latter, former
  triggerSeq,
  // how many call backs do we expect from this
  expectedSensibles,
  expectedAnys
) {
  var former = testPair[0]
  var latter = testPair[1]

  var onSensible = jasmine.createSpy()
  var onAny = jasmine.createSpy()

  var element = makeEditableElement()
  var edited = new Edited(element, onSensible, onAny)

  // trigger the former and the latter according to the provided sequence
  triggerSeq.split('').forEach(function (c) {
    var formerOrLatter = (c === 'F') ? former : latter
    formerOrLatter.triggerFunc.call(edited)
  })

  expect(onSensible.calls.count()).toBe(expectedSensibles)
  expect(onAny.calls.count()).toBe(expectedAnys)
}

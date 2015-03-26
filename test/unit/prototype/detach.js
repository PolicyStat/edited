/* eslint-env jasmine */
var editTypes = require('../helpers/edit-types')
var makeEditableElement = require('../helpers/make-editable-element')
var Edited = require('../../..')

describe('`detach` method', function () {
  it('detaches the instance\'s event listener from the instance\'s element',
    function () {
    var element = makeEditableElement()

    var onSensible = jasmine.createSpy()
    var onAny = jasmine.createSpy()

    var edited = new Edited(element, onSensible, onAny)

    // just checking that the callback works
    editTypes.characterAddition.triggerFunc.call(edited)
    editTypes.space.triggerFunc.call(edited)
    expect(onSensible.calls.count()).toBe(1)
    expect(onAny.calls.count()).toBe(2)

    // checking that `detach` method works
    edited.detach()
    editTypes.backwardsRemoval.triggerFunc.call(edited)
    expect(onSensible.calls.count()).toBe(1)
    expect(onAny.calls.count()).toBe(2)
  })
})

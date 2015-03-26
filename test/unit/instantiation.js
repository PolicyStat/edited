/* eslint-env browser, jasmine */

var Edited = require('../..')
var makeEditableElement = require('./helpers/make-editable-element')

/* eslint no-unused-vars:0 */
describe('Instantiation', function () {
  it('throws when not given arguments', function () {
    expect(function () {
      var edited = new Edited()
    }).toThrow()
  })
  it('throws when not given a callback', function () {
    expect(function () {
      var element = makeEditableElement()
      var edited = new Edited(element, 12412)
    }).toThrow()
  })
  it('possible on a DOM element and does not callback initially', function () {
    var onSensible = jasmine.createSpy()
    var onAny = jasmine.createSpy()
    var element = makeEditableElement()
    var edited = new Edited(element, onSensible, onAny)
    expect(edited instanceof Edited).toBe(true)
    expect(onSensible).not.toHaveBeenCalled()
    expect(onAny).not.toHaveBeenCalled()
    edited.detach()
  })
  it('onAny callback is optional', function () {
    var onSensible = jasmine.createSpy()
    var element = makeEditableElement()
    var edited = new Edited(element, onSensible)
    expect(edited instanceof Edited).toBe(true)
    expect(onSensible).not.toHaveBeenCalled()
    edited.detach()
  })
  it('possible on a body element', function () {
    var onSensible = jasmine.createSpy()
    var onAny = jasmine.createSpy()
    var edited = new Edited(document.body, onSensible, onAny)
    expect(edited instanceof Edited).toBe(true)
    expect(onSensible).not.toHaveBeenCalled()
    expect(onAny).not.toHaveBeenCalled()
    edited.detach()
  })
})
/* eslint no-unused-vars:1 */

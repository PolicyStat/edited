/* eslint-env browser, node, jasmine */
'use strict'

// Preparation
var TextEditDiscern = require('..')
var discern
var keyboard = require('keysim').Keyboard.US_ENGLISH
var emit = require('dom-events').emit
var randomChars = require('randomatic')
var forEach = require('foreach')

var editable = document.createElement('div')
document.body.appendChild(editable)
editable.contentEditable = true
editable.style.height = '10em'
editable.style.width = '20em'
editable.style.border = '1px solid pink'

var press = function (key) {
  keyboard.dispatchEventsForAction(key, editable)
}

var editTypes = {
  characterAddition: {
    eachEventTriggersCallback: false,
    triggerFunc: function() {
      press(randomChars('*', 1))
    }
  },
  backwardsRemoval: {
    eachEventTriggersCallback: false,
    triggerFunc: function() {
      press('backspace', 10)
    }
  },
  forwardRemoval: {
    eachEventTriggersCallback: false,
    triggerFunc: function () {
      press('delete', 10)
    }
  },
  space: {
    eachEventTriggersCallback: false,
    triggerFunc: function () {
      press(' ')
    }
  },
  paste: {
    eachEventTriggersCallback: true,
    triggerFunc: function () {
      emit(editable, 'paste')
    }
  },
  drop: {
    eachEventTriggersCallback: true,
    triggerFunc: function () {
      emit(editable, 'drop')
    }
  }
}

var triggerEditType = function(editType) {
  editType.triggerFunc()
}

describe('Instantiation', function() {
  it('throws when not given arguments', function() {
    expect(function() {
      discern = new TextEditDiscern()
    }).toThrow()
  })
  it('throws when not given a DOM element', function() {
    expect(function() {
      discern = new TextEditDiscern('not a DOM element', function() {})
    }).toThrow()
  })
  it('throws when not given a callback', function() {
    expect(function() {
      discern = new TextEditDiscern(editable, 12412)
    }).toThrow()
  })
  it('instantiates on an element', function() {
    var spy = jasmine.createSpy()
    discern = new TextEditDiscern(editable, spy)
    expect(discern instanceof TextEditDiscern).toBe(true)
  })
})

describe('testing', function() {
  var spy = jasmine.createSpy()
  var discern = new TextEditDiscern(editable, spy)
  // Loop over the edit types
  forEach(editTypes, function(thisEditType, thisEditTypeName) {
    describe('(F)ormer = ' + thisEditTypeName + ',', function() {
      thisEditType.name = thisEditTypeName
      var otherEditTypes = {}

      // Get a list of all the other edit types (not current one)
      forEach(editTypes, function(editType, name) {
        if (editType !== thisEditType) {
          otherEditTypes[name] = editType
        }
      })

      // Go over the other edit types
      forEach(otherEditTypes, function(otherEditType, otherEditTypeName) {
        describe('(L)atter = ' + otherEditTypeName, function() {
          it('does not call back, initially', function() {
            expect(spy).not.toHaveBeenCalled()
          })

          it('calls back on F', function() {
            triggerEditType(thisEditType)
            expect(spy.calls.count()).toEqual(1)
          })

          it('calls back on F,L', function() {
            triggerEditType(otherEditType)
            expect(spy.calls.count()).toEqual(2)
          })

          it('calls back F,L,F', function() {
            triggerEditType(thisEditType)
            expect(spy.calls.count()).toEqual(3)
          })

          it(thisEditType.eachEventTriggersCallback ? 'does' : 'does not' +
            ' call back on F,L,F,F', function() {
            triggerEditType(thisEditType)
            expect(spy.calls.count())
              .toEqual(thisEditType.eachEventTriggersCallback ? 4 : 3)

            discern.reset()
            spy.calls.reset()
          })
        })
      })
    })
  })
})

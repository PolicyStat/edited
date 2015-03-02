/* eslint-env browser, jasmine */

// set to true for some `console.log`ging
var debug = false

// ES5 shim
require('es5-shim')

// external modules
var Edited = require('..')
var keyboard = require('keysim').Keyboard.US_ENGLISH
var emit = require('dom-events').emit
var randomChars = require('randomatic')
var forEach = require('foreach')

// get a document, whether in browser or node
var doc = document

// pressing a key by name on an element
var press = function (element, key) {
  keyboard.dispatchEventsForAction(key, element)
}

// the known edit types
var editTypes = {
  characterAddition: {
    // how to simulate this event artificially. called with the instance as this
    triggerFunc: function () {
      var self = this
      press(self.element, randomChars('*', 1))
    }
  },
  backwardsRemoval: {
    triggerFunc: function () {
      var self = this
      press(self.element, 'backspace')
    }
  },
  forwardRemoval: {
    triggerFunc: function () {
      var self = this
      press(self.element, 'delete')
    }
  },
  space: {
    triggerFunc: function () {
      var self = this
      press(self.element, ' ')
    }
  },
  enter: {
    triggerFunc: function () {
      var self = this
      press(self.element, 'enter')
    }
  },
  paste: {
    // consecutive events of this type each trigger call back
    callsBackOnConsecutive: true,
    triggerFunc: function () {
      var self = this
      emit(self.element, 'paste')
    }
  },
  drop: {
    callsBackOnConsecutive: true,
    triggerFunc: function () {
      var self = this
      emit(self.element, 'drop')
    }
  }
}
// in each edit type object store its name
forEach(editTypes, function (type, name) {
  type.name = name
})

// sets up an element element to test on
var makeEditableElement = function () {
  var element = doc.createElement('div')
  doc.body.appendChild(element)

  // not required for the tests; it enables manual tinkering
  element.contentEditable = true
  element.style.height = '10em'
  element.style.width = '20em'
  element.style.border = '1px solid pink'

  return element
}

/* eslint no-unused-vars:0 */
describe('Instantiation', function () {
  it('throws when not given arguments', function () {
    expect(function () {
      var edited = new Edited()
    }).toThrow()
  })
  it('throws when not given a DOM element', function () {
    expect(function () {
      var edited = new Edited('not a DOM element', function () {})
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
    var edited = new Edited(doc.body, onSensible, onAny)
    expect(edited instanceof Edited).toBe(true)
    expect(onSensible).not.toHaveBeenCalled()
    expect(onAny).not.toHaveBeenCalled()
    edited.detach()
  })
})
/* eslint no-unused-vars:1 */

describe('`detach` method', function () {
  it('detaches the instance\'s event listener from the instance\'s element',
    function () {
    var element = makeEditableElement()

    var sensibles = 0
    var anys = 0

    var onSensible = function () {
      sensibles++
    }

    var onAny = function () {
      anys++
    }

    var edited = new Edited(element, onSensible, onAny)

    // just checking that the callback works
    editTypes.characterAddition.triggerFunc.call(edited)
    editTypes.space.triggerFunc.call(edited)
    expect(sensibles).toBe(1)
    expect(anys).toBe(2)

    // checking that `detach` method works
    edited.detach()
    editTypes.backwardsRemoval.triggerFunc.call(edited)
    expect(sensibles).toBe(1)
    expect(anys).toBe(2)
  })
})

// create edit type test pairs--each gets to be tested against each other
var editTypeTestPairs = []
forEach(editTypes, function (former) {
  forEach(editTypes, function (latter) {
    // we don't make twins--consecutives will be tested--no worries
    if (former !== latter) editTypeTestPairs.push([former, latter])
  })
})

// this is the function that tests the pairs
var instantiateTriggerAndAssert = function (
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

// iterate over the edit types and test each against each other
forEach(editTypeTestPairs, function (pair) {
  var former = pair[0]
  var latter = pair[1]
  if (debug) console.log('testing ' + former.name + ' vs ' + latter.name)

  describe('(F)ormer = ' + former.name + ', ' +
    '(L)atter = ' + latter.name + ':', function () {
    it('0 sensible & 1 any on first edit', function () {
      instantiateTriggerAndAssert(pair, 'F', 0, 1)
    })

    it('1 sensible & 2 any on F,L', function () {
      instantiateTriggerAndAssert(pair, 'FL', 1, 2)
    })

    it('2 sensible & 3 any on F,L,F', function () {
      instantiateTriggerAndAssert(pair, 'FLF', 2, 3)
    })

    it((former.callsBackOnConsecutive ? '5' : '2') +
      'sensible & 6 any on F,F,F,L,F,F', function () {
      var sensibles = former.callsBackOnConsecutive ? 5 : 2
      instantiateTriggerAndAssert(pair, 'FFFLFF', sensibles, 6)
    })
  })
})

// edit type pairs for testing that key combos are ignored
var KeyComboPairs = [
  [
    // former is a key combo
    {
      name: 'mod+i',
      triggerFunc: function () {
        var self = this
        press(self.element, 'ctrl+i')
      }
    },
    // latter is a real edit type
    editTypes.characterAddition
  ],
  [
    {
      name: 'ctrl+z',
      triggerFunc: function () {
        var self = this
        press(self.element, 'ctrl+z')
      }
    },
    editTypes.backwardsRemoval
  ],
  [
    {
      name: 'meta+p',
      triggerFunc: function () {
        var self = this
        press(self.element, 'meta+p')
      }
    },
    editTypes.backwardsRemoval
  ],
  [
    {
      name: 'alt+k',
      triggerFunc: function () {
        var self = this
        press(self.element, 'alt+k')
      }
    },
    editTypes.paste
  ]
]

describe('on key combo', function () {
  forEach(KeyComboPairs, function (pair) {
    it(pair[0].name + ' it does not call back', function () {
      instantiateTriggerAndAssert(
        pair,
        'FFFLFFFFFFFLF',
        pair[1].callsBackOnConsecutive ? 1 : 0,
        2
      )
    })
  })
})

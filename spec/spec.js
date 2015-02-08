/* eslint-env browser, node, jasmine */
'use strict'

// set to true for some `console.log`ging
var debug = false

// external modules
var TextEditDiscern = require('..')
var keyboard = require('keysim').Keyboard.US_ENGLISH
var emit = require('dom-events').emit
var randomChars = require('randomatic')
var forEach = require('foreach')
var isNode = require('isnode')

// get a document, whether in browser or node
var doc = isNode ? require('jsdom').jsdom() : document

// pressing a key by name on an element
var press = function (element, key) {
  keyboard.dispatchEventsForAction(key, element)
}

// the known edit types
var editTypes = {
  characterAddition: {
    // how to simulate this event artificially. called with the instance as this
    triggerFunc: function() {
      var self = this
      press(self.element, randomChars('*', 1))
    }
  },
  backwardsRemoval: {
    triggerFunc: function() {
      var self = this
      press(self.element, 'backspace')
    }
  },
  forwardRemoval: {
    triggerFunc: function() {
      var self = this
      press(self.element, 'delete')
    }
  },
  space: {
    triggerFunc: function() {
      var self = this
      press(self.element, ' ')
    }
  },
  enter: {
    triggerFunc: function() {
      var self = this
      press(self.element, 'enter')
    }
  },
  paste: {
    // consecutive events of this type each trigger call back
    callsBackOnConsecutive: true,
    triggerFunc: function() {
      var self = this
      emit(self.element, 'paste')
    }
  },
  drop: {
    callsBackOnConsecutive: true,
    triggerFunc: function() {
      var self = this
      emit(self.element, 'drop')
    }
  }
}
// in each edit type object store its name
forEach(editTypes, function(type, name) {
  type.name = name
})

// sets up an element element to test on
var makeEditableElement = function() {
  var element = doc.createElement('div')
  doc.body.appendChild(element)

  // not required for the tests; it enables manual tinkering
  element.contentEditable = true
  element.style.height = '10em'
  element.style.width = '20em'
  element.style.border = '1px solid pink'

  return element
}

describe('Instantiation', function() {
  it('throws when not given arguments', function() {
  /* eslint no-unused-vars:0 */
    expect(function() {
      var discern = new TextEditDiscern()
    }).toThrow()
  })
  it('throws when not given a DOM element', function() {
    expect(function() {
      var discern = new TextEditDiscern('not a DOM element', function() {})
    }).toThrow()
  })
  it('throws when not given a callback', function() {
    expect(function() {
      var element = makeEditableElement()
      var discern = new TextEditDiscern(element, 12412)
    }).toThrow()
  })
  /* eslint no-unused-vars:1 */
  it('instantiates on an element and does not callback initially', function() {
    var spy = jasmine.createSpy()
    var element = makeEditableElement()
    var discern = new TextEditDiscern(element, spy)
    expect(discern instanceof TextEditDiscern).toBe(true)
    expect(spy).not.toHaveBeenCalled()
  })
})

describe('`detach` method', function() {
  it('detaches the instance\'s event listener from the instance\'s element',
    function() {
    var element = makeEditableElement()

    var callbackCalled = 0 // this is what we test on

    var callback = function() {
      callbackCalled++
    }

    var discern = new TextEditDiscern(element, callback)

    // just checking that the callback works
    editTypes.space.triggerFunc.call(discern)
    expect(callbackCalled).toEqual(1)

    // checking that `detach` method works
    discern.detach()
    editTypes.backwardsRemoval.triggerFunc.call(discern)
    expect(callbackCalled).toEqual(1)
  })
})

// create edit type test pairs--each gets to be tested against each other
var editTypeTestPairs = []
forEach(editTypes, function(former) {
  forEach(editTypes, function(latter) {
    // we don't make twins--consecutives will be tested--no worries
    if (former !== latter) editTypeTestPairs.push([former, latter])
  })
})

// this is the function that tests the pairs
var instantiateTriggerAndAssert = function(
  testPair,
  // e.g `'FLF'`: former, latter, former
  triggerSeq,
  // how many call backs do we expect from this
  expectedCbCount,
  // this is jasmine's `done` for async testing
  doneWithIt
) {
  var former = testPair[0]
  var latter = testPair[1]

  // creates a new callback
  var genCallback = function(itDoneAfter) {
    // the callback will be called multiple times.
    // this `i` will count how many times the callback was called.
    // it is defined in the callback's parent scope.
    // if it was defined inside the callback it would have been reset to 0 with
    // each call of the callback.
    var i = 0

    if (debug) console.log('gen: ' + former.name + ' vs ' + latter.name)

    // the callback itself
    return function() {
      if (debug) console.log('cb:  i === ' + i + '; itDoneAfter === ' + itDoneAfter + '; ' + former.name + ' vs ' + latter.name)

      // register in the parent scope that a callback was called
      i++

      if (i > itDoneAfter) {
        throw 'FAILED: The callback for ' + former.name + ' vs ' +
          latter.name + ' was called more times than expected'
      }

      if (i === itDoneAfter) {
        // specs where `itDoneAfter > 0` are supposed to end succesfully, here.
        // there are no `expect` calls. the fact that we got here means that
        // the expected number of callbacks were called
        doneWithIt()
      } // else...
      // this spec is not done yet. if the expected number of callback calls
      // is not reached, this spec will timeout and fail
    }
  }

  // use the above callback generator
  var cb = genCallback(expectedCbCount)

  var element = makeEditableElement()
  var discern = new TextEditDiscern(element, cb)

  // trigger the former and the latter according to the provided sequence
  triggerSeq.split('').forEach(function(c) {
    var formerOrLatter = (c === 'F') ? former : latter
    formerOrLatter.triggerFunc.call(discern)
  })
}

// iterate over the edit types and test each against each other
forEach(editTypeTestPairs, function(pair) {
  var former = pair[0]
  var latter = pair[1]
  if (debug) console.log('testing ' + former.name + ' vs ' + latter.name)

  describe('(F)ormer = ' + former.name + ', ' +
    '(L)atter = ' + latter.name + ':', function() {
    it('calls back once on F', function(done) {
      instantiateTriggerAndAssert(pair, 'F', 1, done)
    })

    it('calls back twice on F,L', function(done) {
      instantiateTriggerAndAssert(pair, 'FL', 2, done)
    })

    it('calls back thrice on F,L,F', function(done) {
      instantiateTriggerAndAssert(pair, 'FLF', 3, done)
    })

    it('calls back ' + (former.callsBackOnConsecutive ? '6 times' : 'thrice') +
      ' on F,F,F,L,F,F', function(done) {
      var times = former.callsBackOnConsecutive ? 6 : 3
      instantiateTriggerAndAssert(pair, 'FFFLFF', times, done)
    })
  })
})

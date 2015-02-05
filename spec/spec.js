/* eslint-env browser, node, jasmine */
'use strict'

// external modules
var TextEditDiscern = require('..')
var keyboard = require('keysim').Keyboard.US_ENGLISH
var emit = require('dom-events').emit
var randomChars = require('randomatic')
var forEach = require('foreach')
var isNode = require('isnode')

// get a document, whether in browser or node
var doc = isNode ? require('jsdom').jsdom() : document

// set up an editable element to test on.
var editable = doc.createElement('div')
doc.body.appendChild(editable)
// not required for the tests; it enables manual tinkering
editable.contentEditable = true
editable.style.height = '10em'
editable.style.width = '20em'
editable.style.border = '1px solid pink'

// pressing a key by name
var press = function (key) {
  keyboard.dispatchEventsForAction(key, editable)
}

// the known edit types
var editTypes = {
  characterAddition: {
    // how to simulate this event artificially
    triggerFunc: function() {
      press(randomChars('*', 1))
    }
  },
  backwardsRemoval: {
    triggerFunc: function() {
      press('backspace')
    }
  },
  forwardRemoval: {
    triggerFunc: function () {
      press('delete')
    }
  },
  space: {
    triggerFunc: function () {
      press(' ')
    }
  },
  paste: {
    // consecutive events of this type each trigger call back
    callsBackOnConsecutive: true,
    triggerFunc: function () {
      emit(editable, 'paste')
    }
  },
  drop: {
    callsBackOnConsecutive: true,
    triggerFunc: function () {
      emit(editable, 'drop')
    }
  }
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
      var discern = new TextEditDiscern(editable, 12412)
    }).toThrow()
  })
  /* eslint no-unused-vars:1 */
  it('instantiates on an element', function() {
    var spy = jasmine.createSpy()
    var discern = new TextEditDiscern(editable, spy)
    expect(discern instanceof TextEditDiscern).toBe(true)
    discern.detach()
  })
})

// iterate over the edit types and test each against each other
forEach(editTypes, function(former, formerName) {
  former.name = formerName
  var otherEditTypes = {}

  forEach(editTypes, function(editType, name) {
    if (editType !== former) {
      otherEditTypes[name] = editType
    }
  })

  forEach(otherEditTypes, function(latter, latterName) {
    describe('(F)ormer = ' + formerName + ', (L)atter = ' + latterName + ':', function() {
      var instantiateTriggerAndAssert = function(
        triggerSeq,
        expectedCbCount,
        doneWithThis
      ) {
        var i = 0
        var cb = (function(doneAfter) {
          return function() {
            if (i > doneAfter) {
              throw 'boom'
            }
            i++
            if (!doneAfter || i === doneAfter) {
              discern.detach()
              doneWithThis()
            }
          }
        })(expectedCbCount)

        var discern = new TextEditDiscern(editable, cb)

        triggerSeq.split('').forEach(function(c) {
          (c === 'F' ? former : latter).triggerFunc()
        })
        if (!triggerSeq.length) doneWithThis()
      }

      it('does not call back, initially', function(done) {
        instantiateTriggerAndAssert('', 0, done)
      })

      it('calls back once on F', function(done) {
        instantiateTriggerAndAssert('F', 1, done)
      })

      it('calls back twice on F,L', function(done) {
        instantiateTriggerAndAssert('FL', 2, done)
      })

      it('calls back thrice on F,L,F', function(done) {
        instantiateTriggerAndAssert('FLF', 3, done)
      })

      it('calls back ' + (former.callsBackOnConsecutive ? '6 times' : 'thrice') +
        ' on F,F,F,L,F,F', function(done) {
        var times = former.callsBackOnConsecutive ? 6 : 3
        instantiateTriggerAndAssert('FFFLFF', times, done)
      })
    })
  })
})

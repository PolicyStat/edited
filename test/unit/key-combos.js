/* eslint-env jasmine */

var forEach = require('foreach')

// simulate pressing a key
var press = require('./helpers/press')

// the known edit types
var editTypes = require('./helpers/edit-types')

var instantiateTriggerAndAssert = require('./helpers/instantiate-trigger-and-assert')

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

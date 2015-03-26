/* eslint-env jasmine */
var forEach = require('foreach')
var editTypes = require('./helpers/edit-types')
var instantiateTriggerAndAssert = require('./helpers/instantiate-trigger-and-assert')

// create edit type test pairs--each gets to be tested against each other
var editTypeTestPairs = []
forEach(editTypes, function (former) {
  forEach(editTypes, function (latter) {
    // we don't make twins--consecutives will be tested--no worries
    if (former !== latter) editTypeTestPairs.push([former, latter])
  })
})

// iterate over the edit types and test each against each other
forEach(editTypeTestPairs, function (pair) {
  var former = pair[0]
  var latter = pair[1]

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

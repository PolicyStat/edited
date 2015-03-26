// pressing a key by name on an element
var press = require('./press')
var emit = require('dom-events').emit
var forEach = require('foreach')

// produces random characters
var randomChars = require('randomatic')

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

module.exports = editTypes

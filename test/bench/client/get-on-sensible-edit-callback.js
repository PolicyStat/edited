var sinon = require('sinon') // for debugging

module.exports = sinon.spy(function () {
  var editedInstance = this

  require('./increment-callback-counter')(editedInstance, 'on-sensible')
})

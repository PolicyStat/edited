var doc = document

// sets up an element element to test on
module.exports = function () {
  var element = doc.createElement('div')
  doc.body.appendChild(element)

  // not required for the tests; it enables manual tinkering
  element.contentEditable = true
  element.style.height = '10em'
  element.style.width = '20em'
  element.style.border = '1px solid pink'

  return element
}

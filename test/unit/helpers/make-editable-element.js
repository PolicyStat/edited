var doc = document

// sets up an element element to test on
module.exports = function () {
  var element = doc.createElement('textarea')
  doc.body.appendChild(element)

  return element
}

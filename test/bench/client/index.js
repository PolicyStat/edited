require('es5-shim')
var $ = require('jquery')
var makeHeadingAndDescription = require('./make-heading-and-description')
var makeEditablesTable = require('./make-editables-table')

document.title = 'edited Test Bench'
makeHeadingAndDescription()

$('body').append('<h2>Editable Elements</h2>')
makeEditablesTable()

require('es5-shim')
document.title = 'edited Test Bench'
document.body.style.backgroundColor = 'pink' // very important

var React = require('react')
var Root = require('./react/root')

React.render(React.createElement(Root), document.body)

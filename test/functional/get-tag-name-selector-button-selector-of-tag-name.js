var tagNameSelectorSelector = require('./tag-name-selector-selector')

// returns a CSS selector of the radio button of a provided `tagName`
module.exports = function (tagName) {
  return tagNameSelectorSelector + ' input[type=radio][value=' + tagName + ']'
}


<!-- TITLE/ -->

# on-text-content-edit

<!-- /TITLE -->


<!-- BADGES/ -->

[![NPM version](https://img.shields.io/npm/v/on-text-content-edit.svg)](https://npmjs.org/package/on-text-content-edit "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/on-text-content-edit.svg)](https://npmjs.org/package/on-text-content-edit "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/mightyiam/on-text-content-edit.svg)](https://david-dm.org/mightyiam/on-text-content-edit)
[![Dev Dependency Status](https://img.shields.io/david/dev/mightyiam/on-text-content-edit.svg)](https://david-dm.org/mightyiam/on-text-content-edit#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/mightyiam.svg)](https://www.gratipay.com/mightyiam/ "Donate weekly to this project using Gratipay")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RAKMT86PEJWGC "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/checkouts/d7a8160dbfe9f9779ee31005dbc34294?c=opensource "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/3W0TRAPGDI8DA "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Listens on an editable element and calls a provided callback when it
discerns that a reasonable change was made.

<!-- /DESCRIPTION -->


## How does it work?
It listens on the events that could possibly make changes on the
provided element and determines their type. Some possible types are
character addition, backward deletion, forward deletion, enter, paste
and drop.

When the last event type is different than the previous, then it is
determined that a change was made and the provided callback is fired.

This could be useful for registering undo/redo points, resource–
friendlier autosaves and probably more. Register an issue describing your
integration and I’ll mention it here.


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('on-text-content-edit')`
- Install: `npm install --save on-text-content-edit`

### [Browserify](http://browserify.org/)
- Use: `require('on-text-content-edit')`
- Install: `npm install --save on-text-content-edit`
- CDN URL: `//wzrd.in/bundle/on-text-content-edit@1.0.0`

### [Ender](http://ender.jit.su/)
- Use: `require('on-text-content-edit')`
- Install: `ender add on-text-content-edit`

<!-- /INSTALL -->


## Usage
``` javascript
var OnTCC = require(‘on-text-content-change’)

var cb = function() {
    // register undo point, autosave, etc
}

var onTCC = new OnTCC(contentEditableElement, cb)

// benefit ... and in case you don’t require it any more
onTCC.detach() // and it will stop listening
```

<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; Shahar Or (http://github.com/mightyiam)

<!-- /LICENSE -->




<!-- TITLE/ -->

# edited

<!-- /TITLE -->


Should work in all ES5 browsers and in shimmed IE7&8. Not widely tested [yet](https://github.com/mightyiam/edited/issues/3).
<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/mightyiam/edited/master.svg)](http://travis-ci.org/mightyiam/edited "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/edited.svg)](https://npmjs.org/package/edited "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/edited.svg)](https://npmjs.org/package/edited "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/mightyiam/edited.svg)](https://david-dm.org/mightyiam/edited)
[![Dev Dependency Status](https://img.shields.io/david/dev/mightyiam/edited.svg)](https://david-dm.org/mightyiam/edited#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/mightyiam.svg)](https://www.gratipay.com/mightyiam/ "Donate weekly to this project using Gratipay")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RAKMT86PEJWGC "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/checkouts/d7a8160dbfe9f9779ee31005dbc34294?c=opensource "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/3W0TRAPGDI8DA "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Listens on editable elements and calls a provided callback when it
discerns that a significant edit was made.

<!-- /DESCRIPTION -->


## How does it work?
It listens on the events that could possibly be edits on the
provided element and determines their edit type.

Edit types are:
* Character addition
* Backward deletion
* Forward deletion
* Space
* Enter
* Paste
* Drop

When the last edit type is different than the previous, then it is
determined that a sensible edit was made and the provided callback is
fired.

Also, for edit types paste and drop, each consecutive edit is determined
a significant edit.

Makes sense?

This may be useful for registering undo/redo points, resource–friendlier
autosaves and probably more (register an issue describing your
integration and I’ll mention it here).

<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('edited')`
- Install: `npm install --save edited`

### [Browserify](http://browserify.org/)
- Use: `require('edited')`
- Install: `npm install --save edited`
- CDN URL: `//wzrd.in/bundle/edited@1.0.1`

### [Ender](http://enderjs.com)
- Use: `require('edited')`
- Install: `ender add edited`

<!-- /INSTALL -->


## Usage
``` javascript
var Edited = require(‘edited’)

var cb = function() {
    // register undo point, autosave, etc
}

var edited = new Edited(someEditableElement, cb)

// benefit!

// in case you don’t require it any more
edited.detach() // and it will stop listening
```

The callbacks are called synchronously, before the native event (the edit)
occurs.

The callbacks are called with the instance as `this`.

The provided editable element can be accessed as the `element` property of
the instance.

<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; Shahar Or (http://github.com/mightyiam)

<!-- /LICENSE -->



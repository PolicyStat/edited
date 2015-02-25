# edited  [![Build Status](https://travis-ci.org/mightyiam/edited.svg)](https://travis-ci.org/mightyiam/edited)  [![NPM](https://nodei.co/npm/edited.png)](https://nodei.co/npm/edited/)


Listens on editable elements and calls a provided callback when it
discerns that a significant edit was made.

[![Sauce Test Status](https://saucelabs.com/browser-matrix/edited.svg)](https://saucelabs.com/u/edited)

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

## Copyright

PolicyStat LLC

## License

MIT

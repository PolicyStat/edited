# edited  [![Build Status](https://travis-ci.org/PolicyStat/edited.svg)](https://travis-ci.org/PolicyStat/edited)  [![NPM](https://nodei.co/npm/edited.png)](https://nodei.co/npm/edited/)


Listens on editable elements and calls back on significant changes

[![Sauce Test Status](https://saucelabs.com/browser-matrix/edited.svg)](https://saucelabs.com/u/edited)

## How does it work?

It listens on the events that could possibly be edits on the
provided element and determines their edit type.

### Edit Types

Edited supports the following edit types:

* Character addition
* Backward deletion
* Forward deletion
* Space
* Enter
* Paste
* Drop
* Cut (not yet implemented)

### "Sensible" Edits

Edited does work to callback only on edits that you care about.
Instead of 19 callbacks when the user types `awesomesauce module`,
you get 3 callbacks.
One for `awesomesauce`,
one for the space,
and another for `module`.

Specifically,
when the Edit Type changes,
then it is determined that a sensible edit was made
and the provided callback is fired.
For the paste and drop `Edit Type`s,
every edit counts as a sensible edit.

### onAny

Optionally,
a function can be provided,
which will be called back on any edit
(not  just `Sensible Edits`).

This module may be useful for registering undo/redo points, resource–friendlier
autosaves and probably more (register an issue describing your
integration and I’ll mention it here).

## Example

``` javascript
var Edited = require(‘edited’)

var onSensible = function () {
  // register undo point, autosave, etc
}

var onAny = function () {
  // this may also be useful
}

var edited = new Edited(someEditableElement, onSensible, onAny)

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

Copyright © 2015 PolicyStat LLC

## License

BSD-3-Clause

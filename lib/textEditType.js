"use strict";
var BACKWARDS_REMOVAL_KEYS = [
    "backspace"
];
var FORWARD_REMOVAL_KEYS = [
    "del",
    "delete"
];
var keycode = require("keycode");

module.exports = function(e) {
    if (e.type === "keydown") {
        var key = keycode(e);
        if (BACKWARDS_REMOVAL_KEYS.indexOf(key) > -1) {
            return "backwardsRemoval";
        }
        if (FORWARD_REMOVAL_KEYS.indexOf(key) > -1) {
            return "forwardRemoval";
        }
        if (key === "space") {
            return key;
        }
        return "characterAddition";
    }
    if (e.type === "paste") {
        return e.type;
    }
    if (e.type === "drop") {
        return e.type;
    }
    throw "Shouldn't get this far.";
};

/* eslint-env node, browser */
"use strict";
var BACKWARDS_REMOVAL_KEYS = [
    "backspace"
];
var FORWARD_REMOVAL_KEYS = [
    "del",
    "delete"
];
module.exports = function(key) {
    if (BACKWARDS_REMOVAL_KEYS.indexOf(key) > -1) {
        return "backwardsRemoval";
    }
    if (FORWARD_REMOVAL_KEYS.indexOf(key) > -1) {
        return "forwardRemoval";
    }
    return "addition";
};

/* eslint-env node, browser */
"use strict";
var isElement = require("lodash.iselement");
module.exports = function (element, callback) {
    var self = this;

    if (isElement(element) !== true) {
        throw "Expected a DOM element.";
    }
    if (typeof callback !== "function") {
        throw "Expected a function.";
    }
    self.element = element;
    self.callback = callback;
    self.listen();

    return self;
};

module.exports.prototype.listen = require("./listen");
module.exports.prototype.discern = require("./discern");

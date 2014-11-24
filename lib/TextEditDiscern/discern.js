/* eslint-env node, browser */
"use strict";
var keycode = require("keycode");
var getType = require("../helpers/textEditType");

module.exports = function (e) {
    var self = this;
    self.previousEditType = self.lastEditType;
    self.lastEvent = e;
    self.lastKey = keycode(e);
    self.lastEditType = getType(self.lastKey);
    if (
        typeof self.previousEditType === "string" &&
        self.lastEditType !== self.previousEditType
    ) {
        self.callback();
    }
};

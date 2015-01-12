"use strict";
var getType = require("../../textEditType");

module.exports = function (e) {
    var self = this;
    self.previousEditType = self.lastEditType;
    self.lastEditType = getType(e);
    if (
        typeof self.previousEditType === "string" &&
        self.lastEditType !== self.previousEditType
    ) {
        self.callback();
    }
};

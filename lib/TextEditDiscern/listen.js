/* eslint-env node, browser */
"use strict";
var on,
    TEXT_ALTERING_EVENT_TYPES;

on = require("dom-event");
TEXT_ALTERING_EVENT_TYPES = require("../helpers/text-altering-event-types");

module.exports = function () {
    var self = this;

    TEXT_ALTERING_EVENT_TYPES.forEach(function (type) {
        on(self.element, type, function(e) {
            self.discern(e);
        });
    });
};

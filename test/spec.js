/* eslint-env browser, node, jasmine */
"use strict";

// Preparation
var textarea = document.createElement("textarea");
document.body.appendChild(textarea);
var TextEditDiscern = require("..");
var discern;
var spy = jasmine.createSpy();
var keyboard = require("keysim").Keyboard.US_ENGLISH;
var emit = require("dom-events").emit;
var randomChars = require("randomatic");
var callNTimes = require("call-n-times");
var forEach = require("foreach");
var rnd = require("rnd");

var press = function (key) {
    keyboard.dispatchEventsForAction(key, textarea);
};

var editTypes = {
    characterAddition: {
        eachEventTriggersCallback: false,
        triggerFunc: function() {
            press(randomChars("*", 1));
        }
    },
    backwardsRemoval: {
        eachEventTriggersCallback: false,
        triggerFunc: function() {
            press("backspace", 10);
        }
    },
    forwardRemoval: {
        eachEventTriggersCallback: false,
        triggerFunc: function () {
            press("delete", 10);
        }
    },
    space: {
        eachEventTriggersCallback: false,
        triggerFunc: function () {
            press(" ");
        }
    },
    paste: {
        eachEventTriggersCallback: true,
        triggerFunc: function () {
            emit(textarea, "paste");
        }
    }
};

var triggerEditType = function(editType) {
    var times = editType.eachEventTriggersCallback ? 1 : rnd(999, 2);

    callNTimes(editType.triggerFunc, times);
};

describe("TextEditDiscern", function(){
    it("throws when not given arguments", function(){
        expect(function(){
            discern = new TextEditDiscern();
        }).toThrow();
    });
    it("throws when not given a DOM element", function(){
        expect(function(){
            discern = new TextEditDiscern("not a DOM element", function(){});
        }).toThrow();
    });
    it("throws when not given a callback", function(){
        expect(function(){
            discern = new TextEditDiscern(textarea, 12412);
        }).toThrow();
    });
    it("instantiates on an element", function(){
        discern = new TextEditDiscern(textarea, spy);
        expect(discern instanceof TextEditDiscern).toBe(true);
    });
});

describe("an instance", function() {
    it("calls back wisely", function(){
        forEach(editTypes, function(thisEditType){
            var otherEditTypes = [];

            forEach(editTypes, function(editType){
                if (editType !== thisEditType) {
                    otherEditTypes.push(editType);
                }
            });

            otherEditTypes.forEach(function(otherEditType){
                expect(spy).not.toHaveBeenCalled();

                triggerEditType(thisEditType);
                expect(spy.calls.count()).toEqual(1);

                triggerEditType(otherEditType);
                expect(spy.calls.count()).toEqual(2);

                triggerEditType(thisEditType);
                expect(spy.calls.count()).toEqual(3);

                discern.reset();
                spy.calls.reset();
            });
        });
    });
});

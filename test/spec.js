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
        // Loop over the edit types
        forEach(editTypes, function(thisEditType){
            var otherEditTypes = [];

            // Get a list of all the other edit types (not current one)
            forEach(editTypes, function(editType){
                if (editType !== thisEditType) {
                    otherEditTypes.push(editType);
                }
            });

            // Go over the other edit types
            otherEditTypes.forEach(function(otherEditType){
                // CB not yet called
                expect(spy).not.toHaveBeenCalled();

                // First edit type always triggers callback
                triggerEditType(thisEditType);
                expect(spy.calls.count()).toEqual(1);

                // Triggering a different edit type triggers callback
                triggerEditType(otherEditType);
                expect(spy.calls.count()).toEqual(2);

                // Triggering the previous edit type again triggers callback
                triggerEditType(thisEditType);
                expect(spy.calls.count()).toEqual(3);

                if (thisEditType.eachEventTriggersCallback) {
                    // This type of edit is triggered only once by
                    // `triggerEditType` and we would like to see that another
                    // triggering of it triggers a callback.
                    triggerEditType(thisEditType);
                    expect(spy.calls.count()).toEqual(4);
                }


                discern.reset();
                spy.calls.reset();
            });
        });
    });
});

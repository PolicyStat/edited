/* eslint-env browser, node, jasmine */
"use strict";

// Preparation
var textarea = document.createElement("textarea");
document.body.appendChild(textarea);
var TextEditDiscern = require("..");
var discern;
var sinon = require("sinon");
var spy;
var keyboard = require("keysim").Keyboard.US_ENGLISH;
var emit = require("dom-events").emit;

function press(key) {
    keyboard.dispatchEventsForAction(key, textarea);
}
function typeIn(keystrokes) {
    keystrokes.split("").forEach(function(key){
        press(key);
    });
}

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
        spy = sinon.spy();
        discern = new TextEditDiscern(textarea, spy);
        expect(discern instanceof TextEditDiscern).toBe(true);
    });
    it("does not callback as long as text is added", function(){
        typeIn("The quick, brown fox jumped over the lazy dog.");
        expect(spy.callCount).toBe(0);
    });
    it("calls back if text is removed after text is added", function(){
        press("backspace");
        expect(spy.callCount).toBe(1);
    });
    it("calls back if text is added after text is removed", function(){
        typeIn("Foooooooooooooooo");
        expect(spy.callCount).toBe(2);
    });
    it("calls back if text is removed forward after text is added", function(){
        press("delete");
        expect(spy.callCount).toBe(3);
    });
    it("calls back if text is added after text is removed forward", function(){
        typeIn("Barr.");
        expect(spy.callCount).toBe(4);
    });
    it("calls back on paste after text removed", function(){
        emit(textarea, "paste");
        emit(textarea, "paste");
        emit(textarea, "paste");
        expect(spy.callCount).toBe(5);
    });
});

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

var bun = require("expect.js");
describe("TextEditDiscern", function(){
    it("throws when not given arguments", function(){
        bun(function(){
            discern = new TextEditDiscern();
        }).to.throwError();
    });
    it("throws when not given a DOM element", function(){
        bun(function(){
            discern = new TextEditDiscern("not a DOM element", function(){});
        }).to.throwError();
    });
    it("throws when not given a callback", function(){
        bun(function(){
            discern = new TextEditDiscern(textarea, 12412);
        }).to.throwError();
    });
    it("instantiates on an element", function(){
        spy = sinon.spy();
        discern = new TextEditDiscern(textarea, spy);
        bun(discern).to.be.a(TextEditDiscern);
    });
    it("does not callback as long as text is added", function(){
        typeIn("The quick, brown fox jumped over the lazy dog.");
        bun(spy.callCount).to.be(0);
    });
    it("calls back if text is removed after text is added", function(){
        press("backspace");
        bun(spy.callCount).to.be(1);
    });
    it("calls back if text is added after text is removed", function(){
        typeIn("Foooooooooooooooo");
        bun(spy.callCount).to.be(2);
    });
    it("calls back if text is removed forward after text is added", function(){
        press("delete");
        bun(spy.callCount).to.be(3);
    });
    it("calls back if text is added after text is removed forward", function(){
        typeIn("Barr.");
        bun(spy.callCount).to.be(4);
    });
    it("calls back on paste after text removed", function(){
        emit(textarea, "paste");
        emit(textarea, "paste");
        emit(textarea, "paste");
        bun(spy.callCount).to.be(5);
    });
});

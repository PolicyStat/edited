/* eslint-env node, browser, mocha */
"use strict";

// Preparation
var textarea = document.createElement("textarea");
document.body.appendChild(textarea);
var TextEditDiscern = require("..");
var discern;
var sinon = require("sinon");
var spy;
var keyboard = require("keysim").Keyboard.US_ENGLISH;

function press(key) {
    keyboard.dispatchEventsForAction(key, textarea);
}
function typeIn(keystrokes) {
    keystrokes.split("").forEach(function(key){
        press(key);
    });
}

var expect = require("expect.js");
describe("TextEditDiscern", function(){
    it("throws when not given arguments", function(){
        expect(function(){
            discern = new TextEditDiscern();
        }).to.throwError();
    });
    it("throws when not given a DOM element", function(){
        expect(function(){
            discern = new TextEditDiscern("not a DOM element", function(){});
        }).to.throwError();
    });
    it("throws when not given a callback", function(){
        expect(function(){
            discern = new TextEditDiscern(textarea, 12412);
        }).to.throwError();
    });
    it("instantiates on an element", function(){
        spy = sinon.spy();
        discern = new TextEditDiscern(textarea, spy);
        expect(discern).to.be.a(TextEditDiscern);
    });
    it("does not callback as long as text is added", function(){
        typeIn("The quick, brown fox jumped over the lazy dog.");
        expect(spy.callCount).to.be(0);
    });
    it("calls back if text is removed after text is added", function(){
        press("backspace");
        expect(spy.callCount).to.be(1);
    });
    it("calls back if text is added after text is removed", function(){
        typeIn("Foooooooooooooooo");
        expect(spy.callCount).to.be(2);
    });
    it("calls back if text is removed forward after text is added", function(){
        press("delete");
        expect(spy.callCount).to.be(3);
    });
    it("calls back if text is added after text is removed forward", function(){
        typeIn("Barr.");
        expect(spy.callCount).to.be(4);
    });
});

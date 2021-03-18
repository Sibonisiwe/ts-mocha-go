"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_1 = __importDefault(require("../greet"));
const greet_lang_1 = require("../greet.lang");
describe('The greet function', function () {
    //     it('should be able to greet a person and return name and surname', function() {
    //         assert.equal("Hello, Bob Crow", greet("Bob", "Crow"));
    // });
    it('should be able to greet a person and return name and surname as an object', function () {
        assert_1.default.deepEqual("Hello, Bob Crow we will be in touch at: bob@crow.com", greet_1.default({ firstName: "Bob", lastName: "Crow", email: "bob@crow.com" }));
    });
});
describe('The greetIn fufunction', function () {
    it('should be able to greet in Xhosa', function () {
        let greetInXhosa = new greet_lang_1.GreetInXhosa();
        assert_1.default.equal('Molo, Sibo', greetInXhosa.greet('Sibo'));
    });
    it('should be able to greet in English', function () {
        let greetInEnglish = new greet_lang_1.GreetInEnglish();
        assert_1.default.equal('Hellow, Sibo', greetInEnglish.greet('Sibo'));
    });
    it('should be able to greet in Zulu', function () {
        let greetInZulu = new greet_lang_1.GreetInZulu();
        assert_1.default.equal('Sawubona, Sibo', greetInZulu.greet('Sibo'));
    });
});

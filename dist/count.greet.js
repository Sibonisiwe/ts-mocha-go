"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCounter = void 0;
class userCounter {
    constructor() {
        this.greetCounter = 0;
    }
    countGreet(firstName) {
        var enteredName = new Map();
        enteredName.set(firstName, 0);
        console.log(enteredName.get('sibo'));
    }
    userGreetCount(firstName) {
        return this.greetCounter;
    }
}
exports.userCounter = userCounter;
console.log(new userCounter().greetCounter);

"use strict";
// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName} we will be in touch at: ${person.email}`;
}
exports.default = greet;

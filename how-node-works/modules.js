// console.log(arguments);
// console.log(require("module").wrapper);

// Module.exports
const C = require('./test-module');
const calc1 = new C();
console.log(calc1.add(5,33));

// exports
// const calc2 = require("./test-module-2");
const {add, sub, multiply, divide} = require("./test-module-2");
console.log(add(33,432));
console.log(multiply(33,432));

//chaching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
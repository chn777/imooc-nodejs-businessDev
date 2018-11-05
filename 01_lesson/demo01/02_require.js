const myModule = require('./01_myModule');

console.log(myModule.varVal);
myModule.testFn();

require('./01_myModule');
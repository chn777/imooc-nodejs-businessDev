const fs = require('fs');

const promisify = require("util").promisify;

const readFile = promisify(fs.readFile);

readFile('./promise.js').then(data => {
    console.log(data.toString());
}).catch(ex => {
    console.log(ex);
})


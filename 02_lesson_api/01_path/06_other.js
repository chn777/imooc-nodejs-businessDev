const{sep, delimiter, win32, posix} = require('path');

console.log('mac-seprator------'+sep);
console.log('win-seprator------'+win32.sep);

console.log('PATH-----'+ process.env.PATH);

console.log('mac-delimiter-----'+ delimiter);
console.log('win-delimiter-----'+ win32.delimiter);

// console.log(win32);

// console.log(posix);
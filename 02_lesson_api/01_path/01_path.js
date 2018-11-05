//与路径相关

const { normalize } = require('path');
// 等价于 const normalize = require('path').normalize;

console.log(normalize('/usr/local/bint'));

console.log(normalize('./usr/../local/bint'));
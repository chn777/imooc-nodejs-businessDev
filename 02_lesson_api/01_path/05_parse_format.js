
const {parse,format} = require('path');


const filePath = '/Users/jiangjun/今日学习/NodeJS/imooc/imooc-nodejs-businessDev/02_lesson_api/03_join.js';
// parse 将路径转换为 names
let filePathObj = parse(filePath);
console.log(filePathObj);
// format 将路径对象转换为 path
console.log(format(filePathObj));
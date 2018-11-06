const fs = require('fs');

fs.readFile('./01_readfile.js',(err,bfdata) =>{
    if(err) throw err;

    console.log(bfdata.toString());
});

//同步读文件
const data = fs.readFileSync('./01_readfile.js','utf8');
console.log(data);

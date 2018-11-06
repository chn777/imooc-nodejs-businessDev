const fs = require('fs');

//监听文件夹或者文件名的
fs.watch('./',{recursive:true},(event,fileName) => {
    console.log(event);
    console.log(fileName);
});

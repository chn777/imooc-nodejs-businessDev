const fs = require('fs');
fs.rename('./newText','./text.txt',err =>{
    if(err){
        console.log('文件不存在');
        return;
    }

    console.log('ok')
})
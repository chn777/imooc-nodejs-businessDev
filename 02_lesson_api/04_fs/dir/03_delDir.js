const fs = require('fs');
fs.rmdir('./testDir',err =>{
    if(err){
        console.log('文件夹不存在');
        return;
    }
});
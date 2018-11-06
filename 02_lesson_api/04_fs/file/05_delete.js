
const fs = require('fs');
fs.unlink('./hello',err=>{
    if(err){
        console.log('文件不存在');
        return;
    }

    console.log('ok')
});
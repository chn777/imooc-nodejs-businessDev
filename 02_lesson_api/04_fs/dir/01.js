const fs = require('fs');
fs.readdir('../file',(err,files) =>{
    if(err){
        console.log('文件夹不存在');
        return;
    }
    //files所有文件名
    for(let fileName of files)
    {
        console.log(fileName);
    }
    
})
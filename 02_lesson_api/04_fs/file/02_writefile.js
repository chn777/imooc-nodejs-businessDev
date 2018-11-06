const fs = require('fs');

// fs.writeFile('./newText','你好',{encoding:"utf8"},(err)=>{
//     if(err) throw err;

//     console.log('success');
    
// });

const bfContent = Buffer.from("你好");

fs.writeFile('./newText',bfContent,(err)=>{
    if(err) throw err;
    
    console.log('success');
    
});
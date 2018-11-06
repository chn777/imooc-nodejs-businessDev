const fs = require('fs');

const ws = fs.createWriteStream('./test.txt')

const tid = setInterval(()=>{
    const val = (Math.random() * 10) + "hello \r\n";
    // write 只能使用 Buffer 或则 String类型的数据
    ws.write(val);
},200);

setTimeout(() => {
    ws.end();
    clearInterval(tid);
}, 3000);

ws.on('finish',()=>{
    console.log('done');
})
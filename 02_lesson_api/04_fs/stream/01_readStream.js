const fs = require('fs');

const rs = fs.createReadStream('./01_readStream.js');

//pipe输出到控制台
rs.pipe(process.stdout);
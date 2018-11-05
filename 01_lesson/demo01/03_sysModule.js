const fs = require('fs');
console.log(fs);

fs.readFile('./03_sysModule.js',(err,data)=>{
	console.log(data.toString())
});
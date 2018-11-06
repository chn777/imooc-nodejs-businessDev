// Buffer.isBuffer
// Buffer.byteLength
// Buffer.concat

//获取字符串字节数
console.log(Buffer.byteLength('hello'));//5
console.log(Buffer.byteLength('你好'));//6

//判断是否是Buffer对象
console.log(Buffer.isBuffer(Buffer.alloc(5))); //true

const bf1 = Buffer.from("hello");
const bf2 = Buffer.from("world");
const bf3 = Buffer.from("!");

const bf = Buffer.concat([bf1,bf2,bf3]);
console.log(bf);            //<Buffer 68 65 6c 6c 6f 77 6f 72 6c 64 21>
console.log(bf.toString()); //helloworld!
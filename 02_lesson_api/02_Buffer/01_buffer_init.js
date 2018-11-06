console.log(Buffer.alloc(10)); // <Buffer 00 00 00 00 00 00 00 00 00 00>

console.log(Buffer.alloc(10,1)); // <Buffer 01 01 01 01 01 01 01 01 01 01>
/**
 * 下面这样创建的Buffer可能存在原有数据，并没有初始化
 * <Buffer 11 4f 08 a3 5f 17 00 00 11 4f>
 */
console.log(Buffer.allocUnsafe(10));

console.log(Buffer.from([1, 2, 3]));//<Buffer 01 02 03>

console.log(Buffer.from('test')); //<Buffer 74 65 73 74>

console.log(Buffer.from('test','base64')); //<Buffer b5 eb 2d>



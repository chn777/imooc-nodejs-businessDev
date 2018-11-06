/**
    buf.length
    buf.toString
    buf.fill
    buf.equals
    buf.indexOf
    buf.copy
 */
const buf = Buffer.from("hello");
console.log(buf.length); //5

console.log(buf.toString('base64')); //  aGVsbG8=
console.log(buf.toString('utf-8','0','2')); //he


let buf1 = Buffer.allocUnsafe(5);
console.log(buf1); // <Buffer 10 a6 80 02 01>
//用9填充 第0到第2位 共2个字节
console.log(buf1.fill('9',0,2)); // <Buffer 39 39 30 02 01>

let buf2 = Buffer.from('hello');
//比较两个Buffer对象内容是否一致
console.log(buf2.equals(buf)); //true

console.log(buf2.indexOf('el')); // 类似string的indexOf 返回匹配位置，没有匹配值则返回-1

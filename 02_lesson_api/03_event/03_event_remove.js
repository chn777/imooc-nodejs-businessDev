const EventEmiter = require('events');

class CustomEvent extends EventEmiter{}

const ce = new CustomEvent();

function fn1(){
    console.log('fn1');
}
function fn2(){
    console.log('fn2');
}

ce.on('tevent',fn1);
ce.on('tevent',fn2);

setInterval(()=>{
    ce.emit('tevent');
    console.log('--------------');
    
},1000);

setTimeout(() => {
    //移除指定事件的指定处理函数
    // ce.removeListener('tevent',fn1);
    // ce.removeListener('tevent',fn2);
    //移除指定事件的所有监听
    ce.removeAllListeners('tevent');
}, 5000);


const EventEmiter = require('events');

//继承EventEmiter
class CusEvent extends EventEmiter{}
//实例化自定义的EventEmiter
const ce = new CusEvent();
//监听事件
ce.on("test",()=>{
    console.log('自定义test事件被触发');
    
});

setInterval(()=>{
    //触发事件
    ce.emit('test');
},2000);
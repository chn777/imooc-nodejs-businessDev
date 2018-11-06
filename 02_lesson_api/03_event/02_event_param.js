const EventEmiter = require('events');

class CusEmiter extends EventEmiter{};

const ce = new CusEmiter();

ce.on('error',(error,date) => {
    console.log(date);
    console.log(error);
});

ce.emit('error',new Error('自定义错误事件'),Date.now().toLocaleString());


//如果某个事件只想被触发一次
ce.once('oneTimeTest',()=>{
    console.log('测试一次性事件监听');
});

//虽然触发了两次，但是事件监听器，只处理了一次事件处理
ce.emit('oneTimeTest');
ce.emit('oneTimeTest');
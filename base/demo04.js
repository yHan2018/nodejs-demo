// events 

var events = require('events');

var eventEmitter = new events.EventEmitter();
// eventEmitter.on('done', function (doneTime, doneWho) {
//   console.log('完成时间:',doneTime);
//   console.log('完成人:',doneWho);
// });

setInterval(function () {
  eventEmitter.emit('done', new Date(), 'yhan');
}, 2000);

console.log('执行完毕1');

eventEmitter.addListener('done',function(){
  console.log('为指定事件添加一个监听器到监听器数组的尾部。');
});
// 异步

var events = require('events');

var eventEmitter = new events.EventEmitter();

var contentHandler = function contented(){
  console.log('链接成功');
}
eventEmitter.on('contented',contentHandler);
eventEmitter.emit('contented');
console.log('执行完毕');
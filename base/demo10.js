// node 工具模块 util
var util = require('util');

function Base() {
  this.name = 'base';
  this.base = 1990;
  this.say = function () {
    console.log('hello', this.name)
  }
}

Base.prototype.showName = function () {
  console.log(this.name);
}

function Sub() {
  this.name = 'yhan';
}

util.inherits(Sub, Base);

const sub = new Sub();
sub.showName();
try {
  sub.say(); // util.inherits 仅仅继承 prototype 上的属性和方法
} catch (error) {
  const e = util.inspect(error); // 將对象转换成字符串
  console.log('error:', e)
}
// 全局对象
console.log('fileName',__filename);
console.log('dirName',__dirname);

// process 进程对象
// process.on('exit',function(code){
//   setTimeout(function(){
//     console.log('该代码不会被执行');
//   });
//   console.log('退出码为:', code);
// });

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 读取参数
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);

// 平台信息
console.log(process.platform);
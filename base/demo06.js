// stream

/**
 *  Stream 是一个抽象接口，Node 中有很多对象实现了这个接口
 *  例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）
 * 
 *  在 nodejs 中 stream 有四种类型：readable(可读) writable(可写) duplex(可读可写) transform(操作被写入数据，然后读出结果)
 * 
 *  所有的 Stream 对象都是 EventEmitter 的实例。
 *  常用的事件有：data(当有数据可读时触发) end(没有更多的数据可读时触发) error(在读或写过程发生错误时触发) finish(所有数据已被写入到底层系统时触发)
 */

 const fs = require('fs');
/**
 * ******************************* 读写流 ********************************
 */


 // 创建一个文件读入流
 const readStream = fs.createReadStream('input.txt');
 
 // 设置文件流的编码
 readStream.setEncoding('UTF-8');

 let data = ''; 
 // 读取数据
 readStream.on('data',function(chunk){
  data = data +  chunk; // chunk： 块
  console.log(data);
  console.log('--------');
 });

// 读取结束
readStream.on('end',function(){
  console.log('end',data);
});

// 读取错误
readStream.on('error',function(error){
  console.log(error.stack)
});

/**
 * ---------------- 写--------------
 */

// 创建一个文件写入流
// const writeStream = fs.createWriteStream('output.txt');
// const content =  'yhan，你是？'

// // 写入数据，并设置编码 
// writeStream.write(content,'UTF-8');

// // 标记文件尾部 
// writeStream.end();

// // 处理写入异常
// writeStream.on('error',function(error){
//   console.log(error.stack)
// });

/**
 * ************************************* 管道流 ************************************
 * 
 * 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。（链接两个流的管道）
 */

//  readStream.pipe(writeStream);

 /**
  * ************************************ 链式流 **************************************
  * 
  * 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
  */

  var zlib = require('zlib');

  fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  console.log("文件压缩完成。");
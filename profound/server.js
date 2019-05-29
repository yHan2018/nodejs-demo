const net = require('net');

const server = net.createServer();
server.on('connection', (clientSocket) => {
  // console.log(clientSocket);
  console.log('有新的连接进来了');
  clientSocket.on('data', (res) => {
    console.log('客户端：', res.toString());
  });
  clientSocket.write('hello');
});

server.listen(3000, () => {
  console.log('server running');
});

// 2.3节
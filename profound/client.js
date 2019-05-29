const net = require('net');

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3000
});

client.on('connect', () => {
  console.log('连接成功');
  client.write('world');
});

client.on('data', (res) => {
  console.log('服务器：', res.toString());
})
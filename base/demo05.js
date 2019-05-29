// buffer

const buf = Buffer.from('awx');
console.log(buf.toString());

let buf1= Buffer.alloc(10);
buf1.write('yhan');
console.log(buf1.toString());
const result1 = buf.compare(buf1);
const result2 = buf.compare(buf);
console.log(result1);
console.log(result2);
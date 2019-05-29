/** 
 * 路由
 */


var server = require("./server");
var router = require("./router");
 
server.start(router.route);
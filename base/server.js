// server

var http = require('http');
var url = require('url');

function start(route) {
  function onRequest(request, response) {
    const urlParse = url.parse(request.url);
    // console.log('urlParse', urlParse);

    var pathName = urlParse.pathname;
    console.log("Request for " + pathName + " received.");
    route(pathName);

    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write('hello world');
    response.end();
  }

  http.createServer(onRequest).listen(8080);
  console.log("Server has started.");
}

exports.start = start;
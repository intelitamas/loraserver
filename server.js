
var websocket = require('ws');
var ws = new websocket("ws://fc1.intelilight.eu:6080/JSON",{protocol: "protocolOne"});

console.log("end");


ws.on('open', function open() {
  console.log("open");
});
 
ws.on('message', function(data, flags) {
  console.log(data); 
});

var http = require('http');
 
 http.createServer(function (request, response) {
   console.log(request.url);
   response.writeHead(200);
  response.end("nothing to do here");
}).listen(process.env.PORT);
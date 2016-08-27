
var websocket = require('ws');
var ws = new websocket("ws://fc1.intelilight.eu:6080/JSON", {
  protocol: "protocolOne"
});

'use strict';

var WebSocketModule = require('./modules/WebSocketModule');

(function()
{
  var wsm = new WebSocketModule('ws://echo.websocket.org', 'webSocketBox', 'response', 'sendBtn');
  wsm.init();
})();
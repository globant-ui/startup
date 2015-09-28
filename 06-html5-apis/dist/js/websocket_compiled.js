(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var WebSocketModule = (function ()
{
  function WebSocketModule (uri, textBox, input, sndBtn)
  {
    var websocket;
    textBox = document.getElementById(textBox);
    input = document.getElementById(input);
    sndBtn = document.getElementById(sndBtn);

    // Init Function
    this.init = function()
    {
      // Initialize a Websocket with defined uri
      websocket = new WebSocket(uri);
      // Define events for Websocket
      websocket.onopen    = function()  { WriteToScreen('*** CONNECTED ***');     };
      websocket.onclose   = function()  { WriteToScreen('*** DISCONNECTED ***');  };
      websocket.onmessage = function(e) { WriteToScreen('-> ' + e.data);          };
      websocket.onerror   = function(e) { WriteToScreen('ERROR: ' + e.data);      };
    };

    // Write text on textarea with a new line
    function WriteToScreen (msg)
    {
      textBox.value += msg + '\n';
    }

    // Write Message on screen and send it to websocket on click
    sndBtn.onclick = function()
    {
      WriteToScreen('<- ' + input.value);
      websocket.send(input.value);
    };
  }

  return WebSocketModule;
}());

module.exports = WebSocketModule;
},{}],2:[function(require,module,exports){
'use strict';

var WebSocketModule = require('./modules/WebSocketModule');

(function()
{
  var wsm = new WebSocketModule('ws://echo.websocket.org', 'webSocketBox', 'response', 'sendBtn');
  wsm.init();
})();
},{"./modules/WebSocketModule":1}]},{},[2]);

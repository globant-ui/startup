
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
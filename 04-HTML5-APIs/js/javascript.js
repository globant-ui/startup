function localStorageSave () {
  localStorage.setItem('textAreaLocal', document.querySelector("#textContent").value);
  console.log( localStorage.getItem('textAreaLocal') );
}

window.onload = function () {
  let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

  dataBase = indexedDB.open("DataBase", 1);

  dataBase.onupgradeneeded = function (e) {
    let db = event.target.result;
    object = db.createObjectStore("textData", { keyPath : 'text' });
    object.createIndex('textIndex', 'text', { unique : false });
  };

  dataBase.onsuccess = function (e) {
    console.log('DB Works');
  };

  dataBase.onerror = function (e)  {
    console.log('DB didnt work');
  };

  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    let files = evt.dataTransfer.files;
    let reader = new FileReader();
    reader.onload = function(event) {
         document.getElementById('drop_zone').value = event.target.result;
    }
    reader.readAsText(files[0],"UTF-8");
  }

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }

  let dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
}

function indexedDBSave () {
  let active = dataBase.result;
  let data = active.transaction("textData", "readwrite").objectStore("textData");
  let request = data.put( {
    keyPath: 1,
    text: document.querySelector("#textContent").value
  });
  request.onerror = function (e) {
                    console.log('NO');
  };

  data.oncomplete = function (e) {
                   document.querySelector("#textContent").value = '';
                   alert('Objeto agregado correctamente');
               };
}

function clearLocalStorage () {
  localStorage.clear();
}

function clearIndexedDB () {
  let active = dataBase.result;
  let transaction = active.transaction("textData", "readwrite");

  transaction.oncomplete = function(event) {
    console.log('Transaction completed');
  };


  transaction.onerror = function(event) {
    console.log('Transaction not completed');
  };
  let objectStore = transaction.objectStore("textData");
  let objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = function(event) {
    console.log('Delete completed');
  };
}
//WEBSOCKET Exercise
  let wsUri = "ws://echo.websocket.org/";
  let output;

  function init()
  {
    output = document.getElementById("output");
    testWebSocket();
  }

  function testWebSocket()
  {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
  }

  function onOpen(evt)
  {
    writeToScreen("CONNECTED");
    doSend("WebSocket rocks");
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
  {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  window.addEventListener("load", init, false);

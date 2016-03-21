(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var DraggableModule = (function(){

  function DraggableModule (draggableItem)
  {
    // Get item
    draggableItem = document.getElementById(draggableItem);

    // Cancel DragOver and DragEnter Events to catch Drop event
    // Workarround for chrome
    draggableItem.dragover  = function(e) {e.preventDefault(); return false; };
    draggableItem.dragenter = function(e) {e.preventDefault(); return false; };

    draggableItem.ondrop = function(e)
    {
      event.preventDefault();
      // Get file
      var file = e.dataTransfer.files[0];
      // Open a Reader
      var reader = new FileReader();
      // onload event will put text on item
      reader.onload = function(e)
      {
        draggableItem.value = e.target.result;
      };
      // read file
      reader.readAsText(file);
    };
  }

  return DraggableModule;
}());

module.exports = DraggableModule;
},{}],2:[function(require,module,exports){
'use strict';

var IndexedDBModule = (function()
{
  function IndexedDBModule (indxDbIdBox, indxDBTextBox, indxDBLoadBtn, indxDBSaveBtn, indxDBClearBtn, dbName)
  {
    // Attach DOM element to var.
    indxDbIdBox = document.getElementById(indxDbIdBox);
    indxDBTextBox = document.getElementById(indxDBTextBox);
    indxDBLoadBtn = document.getElementById(indxDBLoadBtn);
    indxDBSaveBtn = document.getElementById(indxDBSaveBtn);
    indxDBClearBtn = document.getElementById(indxDBClearBtn);
    /************************* Private Methods for Control *************************/
    var DisableItems = function(idBox, txtBox, loadBtn, saveBTn)
    {
      idBox.disabled    = true;
      txtBox.disabled   = true;
      loadBtn.disabled  = true;
      saveBTn.disabled  = true;
    };

    // Will Handle errors in this Module
    var ThrowError = function(err)
    {
      console.log('An error ocurred: ' + err);
      indxDBTextBox.placeholder =  err;
      // Disable all indexedDB Functionality
      DisableItems(indxDbIdBox, indxDBTextBox, indxDBLoadBtn, indxDBSaveBtn);
    };

    /************************* Check Compatibility *************************/
    // Try loading the correct indexedDB Method
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    // Check Browser Compatibility for indexedDB
    if (!window.indexedDB) {
      ThrowError('IndexedDB isn\'t compatible with your browser');
      return;
    }

    /************************* Database Open *************************/

    // var will hold a opened database
    var db;

    // Will try to open the database w/ version 1
    var openRequest = window.indexedDB.open(dbName, 1);

    // Create the db if not exists or version mismatch
    openRequest.onupgradeneeded = function (e) {
      // Log info into console
      console.log('Database doesn\'t exists or version mismatch');
      // Create Containers for data if not exists
      if (!db.objectStoreNames.contains("htmlAPI")) {
        db.createObjectStore("htmlAPI", {keyPath: 'id'});
      }

      // Put database result into a global var to access it!
      db = e.target.result;
    };

    // On Sucess, Put database result into a global var to access it!
    openRequest.onsuccess = function (e) { db = e.target.result; };

    // Handle Error
    openRequest.onerror = function (e) { ThrowError(openRequest.errorCode); };

    /************************* Click Events *************************/
    indxDBSaveBtn.onclick = function ()
    {
      // Open Transaction on readwrite.
      var transaction = db.transaction(['htmlAPI'], 'readwrite');
      // Set object store for items
      var store = transaction.objectStore('htmlAPI');

      // Put the content into DataBase
      store.put({id : Number(indxDbIdBox.value), text: indxDBTextBox.value });
    };

    indxDBLoadBtn.onclick = function ()
    {
      // Open Transaction on readonly.
      var transaction = db.transaction(['htmlAPI']);
      // Set object store for items
      var store = transaction.objectStore('htmlAPI');

      // try to retrieve an item by id
      var request = store.get(Number(indxDbIdBox.value));

      request.onsuccess = function (e)
      {
        // Check if id is really defined on storage
        if(typeof e.target.result !== 'undefined')
        {
          // Insert text on textbox
          indxDBTextBox.value = e.target.result.text;
          indxDBTextBox.placeholder =  '';
        }
        else
        {
          // Insert empty on textbox
          indxDBTextBox.value = '';
          indxDBTextBox.placeholder = 'Value is Empty';
        }
       };

      request.onerror = function (e)
      {
        ThrowError(e.target.errorCode);
      };
    };

    indxDBClearBtn.onclick = function()
    {
      // Open Transaction on readwrite.
      var transaction = db.transaction(['htmlAPI'], 'readwrite');
      // Clear ObjectStore
      transaction.objectStore('htmlAPI').clear();
    };

  }

  return IndexedDBModule;
}());

module.exports = IndexedDBModule;
},{}],3:[function(require,module,exports){
'use strict';

var LocalStorageModule = (function () {

  function LocalStorageModule(localStorageTextBox, localStorageSaveBtn, localStorageLoadBtn, localStorageClearBtn, index)
  {
    // Attach DOM element to var.
    localStorageTextBox = document.getElementById(localStorageTextBox);
    localStorageSaveBtn = document.getElementById(localStorageSaveBtn);
    localStorageLoadBtn = document.getElementById(localStorageLoadBtn);
    localStorageClearBtn = document.getElementById(localStorageClearBtn);

    // Check Browser Compatibility for LocalStorage
    if (typeof Storage === "undefined")
    {
      // Alert and disable buttons
      window.alert('Sorry Bro, your browser don\'t support LocalStorage');
      localStorageSaveBtn.disabled =  true;
      localStorageClearBtn.disabled = true;
      return;
    }

    // Read Storage
    localStorageTextBox.value = localStorage.getItem(index);

    // Define clicks events for LocalStorage
    localStorageSaveBtn.onclick = function()
    {
      // Save text into LocalStorage
      localStorage.setItem(index, localStorageTextBox.value);
    };

    // Load LocalStorage Text
    localStorageLoadBtn.onclick = function()
    {
      localStorageTextBox.value = localStorage.getItem(index);
    };

    // Clears data on box & LocalStorage
    localStorageClearBtn.onclick = function(){
      localStorageTextBox.value = '';
      localStorage.clear();
    };
  }
  // Return Module Constructor
  return LocalStorageModule;
}());

module.exports = LocalStorageModule;
},{}],4:[function(require,module,exports){
'use strict';
// Index for storage.html
// Load Requires
var LocalStorageModule = require('./modules/LocalStorageModule.js');
var IndexedDBModule = require('./modules/IndexedDBModule.js');
var DraggableModule = require('./modules/DraggableModule');

// On DOM Ready
(function(){

  // Call logic inside Modules
  var drglclstg = new DraggableModule('localStorageBox');
  var drgidb = new DraggableModule('indexedDBBox');
  var lclStg = new LocalStorageModule ('localStorageBox', 'localStorageSave', 'localStorageLoad' , 'localStorageClear', 'text' );
  var indxDb = new IndexedDBModule('indexedDBid', 'indexedDBBox', 'indexedDBLoad', 'indexedDBSave',
      'indexedDBClear', 'text');

})();
},{"./modules/DraggableModule":1,"./modules/IndexedDBModule.js":2,"./modules/LocalStorageModule.js":3}]},{},[4]);

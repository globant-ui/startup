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
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
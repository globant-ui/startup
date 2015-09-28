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
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
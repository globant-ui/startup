var movie = Object.create(null);
Object.defineProperty(movie, 'Tittle', {
  value: "Spacejam",
  writable: true,
  enumerable: true,
  configurable: true
});

 function importMatrixToDOM(matrix) {
   console.log(matrix);

   for(var indexTR = 0; indexTR < 3; indexTR++ ){
     var trNode = document.createElement("tr");

     for (var indexTD = 0; indexTD < 3; indexTD++) {
         var tdNode = document.createElement("td");
         var dataNode = document.createTextNode(matrix[indexTR][indexTD]);
         tdNode.appendChild(dataNode);
         trNode.appendChild(tdNode);
     }
     document.getElementById("dataTable").appendChild(trNode);
   }
 }

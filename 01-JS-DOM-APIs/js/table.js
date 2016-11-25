// arr must be bidimensional
function makeTable(array) {
  let tableNode = document.createElement("table");
  let rowNode;
  let columnNode;
  let textNode;

  document.getElementById("table-div").appendChild(tableNode);

  array.map(function(row) {
    rowNode = document.createElement("tr");
    tableNode.appendChild(rowNode);
    
    row.map(function(col) {
      columnNode = document.createElement("th");
      textNode = document.createTextNode(col);
      columnNode.appendChild(textNode);
      rowNode.appendChild(columnNode);
    });
  });
}

let exampleArray = [];
exampleArray[0] = ["Hi", 51, 52];
exampleArray[1] = [60, "Bye", 62];
exampleArray[2] = ["The", 21, 12];

makeTable(exampleArray);

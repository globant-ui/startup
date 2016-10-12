function inputTable(){
  var tableSymbol = [
    ['a','b','c' ,'d', 'e'],
    ['f','g','h', 'i', 'k'],
    ['l','m','n', 'o', 'p'],
  ];
  return tableSymbol;
}

function clickGenerateTable(){
  tableSymbol = inputTable();
  var body = document.getElementsByTagName("body")[0];
  var tableConstructor = document.createElement("table");
  var tableBody = document.createElement("tbody");
  for (var i = 0; i < 3; i++){
    var row = document.createElement("tr");
    for (var e = 0; e < 5; e++){
      var col = document.createElement("td")
      var data = document.createTextNode(tableSymbol[i][e]);
      col.appendChild(data);
      row.appendChild(col);
    }
    tableBody.appendChild(row);
  }
  // append the <tbody> inside the <table>
  tableConstructor.appendChild(tableBody);
  // table border attribute to
  tableConstructor.setAttribute("border", "2");
  document.getElementById("table").appendChild(tableConstructor);
}

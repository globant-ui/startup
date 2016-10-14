function inputTable(){
  return [
  ['a','b','c' ,'d', 'e'],
  ['f','g','h', 'i', 'k'],
  ['l','m','n', 'o', 'p']
  ];
}

function clickGenerateTable(){
  let tableSymbol = inputTable();
  let tableConstructor = document.createElement("table");
  let tableBody = document.createElement("tbody");
  let row, col;

  tableSymbol.map(function (subarray) {
    row = document.createElement("tr");
    subarray.map(function (value) {
      col = document.createElement("td")
      col.appendChild(document.createTextNode(value));
      row.appendChild(col);
    });
    tableBody.appendChild(row);
  });

  // append the <tbody> inside the <table>
  tableConstructor.appendChild(tableBody);
  // table border attribute to
  tableConstructor.setAttribute("border", "2");
  document.getElementById("table").appendChild(tableConstructor);
}

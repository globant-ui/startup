
let matrix = [
  ["apple", "orange", "banana"],
  ["grape", "strawberry", "berry"],
  ["mango", "kiwi", "blueberry"]
];
let table = document.createElement("table");
let tr, td, textNode;
for (let i = 0; i < matrix.length; i++) {
  tr=document.createElement("tr");
  for (let j = 0; j < matrix[i].length; j++) {
    td=document.createElement("td");
    textNode=document.createTextNode(matrix[i][j]);
    td.appendChild(textNode);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
document.body.appendChild(table);

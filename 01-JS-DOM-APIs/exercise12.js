function importMatrixToDOM () {
  let matrix = [
    ['Firstname','Lastname','Prefered Country'],
    ['John','Brown','United States'],
    ['Kevin','Smith','Great Britain'],
    ['Michael','Jordan','United States'],
  ];
  let trNode;
  let tdNode;
  let dataNode;
  let dataTable = document.getElementById("dataTable");
  for(let indexTR = 0; indexTR < 4; indexTR++ ){
    trNode = document.createElement("tr");

    for (let indexTD = 0; indexTD < 3; indexTD++) {
      tdNode = document.createElement("td");
      dataNode = document.createTextNode(matrix[indexTR][indexTD]);
      tdNode.appendChild(dataNode);
      trNode.appendChild(tdNode);
    }
    dataTable.appendChild(trNode);
  }
};

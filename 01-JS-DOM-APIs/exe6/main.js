
//show_table()
//input:matrix[][] output:null
//Show a DOM element that is a table
function show_table(matrix){
    let classe = document.getElementsByClassName("table")[1];
    let tabla = document.createElement("table");
    let tbody = document.createElement("tbody");
    for(let i = 0; i < matrix.length ; i++ ){
        let row = document.createElement("tr");
        for(let j = 0; j < matrix[i].length ; j++ ){
            let cell = document.createElement("td");
            let text = document.createTextNode(matrix[i][j]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    tabla.appendChild(tbody);
    classe.appendChild(tabla);
}

//tbl.addEventListener("click", show_table([[1,2],[1,2]]));

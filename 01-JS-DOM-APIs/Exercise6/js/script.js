/* window.onload = function() {
    document.getElementById('pa').className = "visible";
}; */

const pr1 = document.getElementById("p1");
var bT1 = document.getElementById("bt1");
var bt2 = document.getElementById("btnAPI");
var btTable = document.getElementById("btTable");
const table = document.getElementById('table');

const getJSON = (url) => {
    let req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);
    if (req.status == 200) {
        let res = JSON.parse(req.responseText);
        return (res)
    }
}

const printMatrix = (matrix) => {
    matrix.forEach((rowData) => {
        const row = document.createElement('tr');
        rowData.forEach((columnItem) => {
            const column = document.createTextNode(columnItem);
            row.appendChild(column);
        });
        table.appendChild(row);
    });
}

bT1.addEventListener("click", function() {
    const joke = getJSON('http://api.icndb.com/jokes/random').value.joke;
    pr1.innerHTML = joke;
});

bt2.addEventListener("click", function() {
    const url = "https://api.github.com/search/repositories?q=";
    const value = document.getElementById("searchValue").value;
    if (value.length === 0) {
        return;
    }
    const data = getJSON(`${url}${value}`);
    const doc = data.items.map((item) => item.full_name);
    doc.forEach((docItem) => {
        document.getElementById("listaAPI").innerHTML += `<li> ${docItem} </li>`
    });
});

btTable.addEventListener("click", function() {
    const matrix = [
        [0, 1],
        [2, 3]
    ];
    printMatrix(matrix);
});

document.getElementById("bt1").onclick = function() {

};

function makeItVisible() {
    pr1.className = "visible";
}

function alertMessage() {
    alert("Alert Message");
}


window.onload = makeItVisible();
//bT1.addEventListener("click", () => alertMessage());

/* btV.addEventListener("click", () => makeItVisible()); */
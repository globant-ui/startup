window.onload = newRow;

var row = -1;
var col;

function newRow() {
	if(row != -1 && col == 1) {
		alert("Row empty");
		return;
	}
	var newr = document.createElement("tr");
	document.getElementById('table').appendChild(newr);
	row++;
	col = 1;
	showPosition();
}

function addMatrix() {
	var val = document.getElementById("text");
	if(val.value == "") {
		alert("Write something");
		return;
	}
	var element = document.createElement("td");
	var content = document.createTextNode(val.value);
	element.appendChild(content);
	document.getElementById("table").childNodes[row].appendChild(element);
	col++;
	showPosition();
}

function showPosition() {
	var pos = document.getElementById("position");
	pos.innerHTML = "Row: " + (row+1) + " Column: " + col;
}
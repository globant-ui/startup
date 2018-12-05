function mostrarAnimacion() {
	var x = document.getElementById("oculto");
	x.style.opacity = 1;
}

function mostrarMensaje() {
	alert("Mensaje: Hello world")
}


function getJokeWithAjax() {
	var Http = new XMLHttpRequest();
	var url='http://api.icndb.com/jokes/random';
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange = function() {
		if(Http.readyState === 4 && Http.status === 200) {
				var json = JSON.parse(Http.responseText).value.joke;
				document.getElementById("destino").innerHTML = "The joke: " + json;
		}
		else if (Http.status>=500 && Http.status<600) {
				seccion = document.getElementById("oculto");
				document.seccion.style.backgroundColor = "red";
			}
		}
}



function getOtherDataWithAjax() {
	var Http = new XMLHttpRequest();
	var valorInput = document.getElementById('nombre_topic').value;
	var newStr = valorInput.replace(" ","+topic:");
	var url='https://api.github.com/search/repositories'; // "?q=topic:<nombretopico>" -> parametro
	url += '?q=topic:'+ newStr;
	alert(url);
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange = function() {
		if(Http.readyState === 4 && Http.status === 200) {


			var json = JSON.parse(Http.responseText);

			json.items.forEach(analizarItem);
		}
	}
}


function analizarItem(item) {
	console.log(item.id + ": " + item.name);
	var ul = document.getElementById("listaDeRepos");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(item.id+": "+item.name+": "+ item.owner.html_url));
	ul.appendChild(li);
}

function generate_table() {

  var body = document.getElementsByTagName("body")[0];

  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  var filas = prompt("Ingrese nro de filas", 10);
  var columnas = prompt("Ingrese nro de columnas", 10);
  var matriz = crearMatriz(filas,columnas);

  for (var i = 0; i < filas; i++) {

    var row = document.createElement("tr");

    for (var j = 0; j < columnas; j++) {
      var celda = document.createElement("td");
      var textoEnCelda = document.createTextNode(matriz[i][j]);
      celda.appendChild(textoEnCelda);
      row.appendChild(celda);
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);

  body.appendChild(tbl);

  tbl.setAttribute("border", "1");
}

function crearMatriz(filas,columnas) {
	var matrix = [];
	for(var i=0; i<filas; i++) {
    	matrix[i] = [];
    	for(var j=0; j<columnas; j++) {
       		matrix[i][j] = "elemento sub: "+ (i+1) + "," + (j+1);
    	}
	}
	return matrix;
}
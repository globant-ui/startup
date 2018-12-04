function mostrarAnimacion() {
	var x = document.getElementById("oculto");
	x.style.opacity = 1;
}



function mostrarMensaje(){
	alert("Mensaje: Hello world")
}


function getJokeWithAjax(){
	var Http = new XMLHttpRequest();
	var url='http://api.icndb.com/jokes/random';
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange = function(){
		if(Http.readyState == 4 && Http.status == 200){
				var json = JSON.parse(Http.responseText).value.joke;
				document.getElementById("destino").innerHTML = "The joke: " + json;
		}
		else if (Http.status>=500 && Http.status<600){
				seccion = document.getElementById("oculto");
				document.seccion.style.backgroundColor = "red";
			}
		}
}



function getOtherDataWithAjax(){
	var Http = new XMLHttpRequest();
	var valorInput = document.getElementById('nombre_topic').value;
	var newStr = valorInput.replace(" ","+topic:");
	var url='https://api.github.com/search/repositories'; // ?q=topic:JavaScript'; //"?q=topic:JavaScript" luego de la url
	url += '?q=topic:'+ newStr;
	alert(url);
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange = function(){
		if(Http.readyState == 4 && Http.status == 200){


			var json = JSON.parse(Http.responseText);

			json.items.forEach(analizarItem);
			cont++;
	
		}
	}
}


function analizarItem(item){
	console.log(item.id + ": " + item.name);

	var ul = document.getElementById("listaDeRepos");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(item.id+": "+item.name+": "+ item.owner.html_url));
	ul.appendChild(li);
}
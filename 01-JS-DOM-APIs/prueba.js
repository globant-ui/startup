function mostrarAnimacion() {
	var x = document.getElementById("oculto");
	x.style.opacity = 1;
}



function mostrarMensaje(){
	alert("Mensaje: Hello world")
}

function getJoke(){
	fetch('http://api.icndb.com/jokes/random').then(response => {
	  return response.json();
	}).then(data => {
		joke= data.value.joke;
		document.getElementById('destino').innerHTML = 'The joke: ' + joke;
	}).catch(err => {
	  	alert("Fallo la captura del JSON!")
	})
}


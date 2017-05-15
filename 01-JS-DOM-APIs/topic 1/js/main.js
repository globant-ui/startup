document.addEventListener("DOMContentLoaded",init);


//--------------------------4----------------------------------

var fadein = document.body.getElementsByTagName("section")[0];


function fade(elemento, nuevaopa, intervalo,timer) {
	if(elemento.style.opacity != nuevaopa) {
		elemento.style.opacity = Math.min(parseFloat(elemento.style.opacity)+intervalo,nuevaopa);
	} else {
		clearInterval(timer);
	}
}
//--------------------------6------------------------------------------

function jokeclick() {
	data("http://api.icndb.com/jokes/random", appendJoke);
}

function appendJoke() {
	var section = document.querySelector("section");
	var joke = JSON.parse(this.responseText);
	appendText(section,"p",joke.value.joke);
}


function appendText(parent, newHtmlTag, text){
	var newTag = document.createElement(newHtmlTag);
	var data2append = document.createTextNode(text);
	newTag.appendChild(data2append);
	parent.appendChild(newTag);
}


//----------------------8-------------------------------------
function errorclick() {
	data("http://httpstat.us/500", errorTransform);
}

function errorTransform() {
	if(this.status==500) {
		fadein.getElementsByTagName("p")[0].style.background = "red";
	}
}
//-------------------------9----------------------------------

function repoHandler (){
	var sectionAppend = document.body.getElementsByClassName("buscar")[0];
	var responseArray = JSON.parse(this.responseText).items;
	responseArray.forEach(function(elem) {
		appendText(sectionAppend, "p",elem["full_name"]);
		var list = document.createElement("ul");
		sectionAppend.appendChild(list);
		lista(list,elem.owner,"login");
		lista(list,elem,"description","url","id","score");
	})
}

function lista(parent, object){
	var cantArguments = arguments.length;
	var i = 2;
	for(i;i<cantArguments;i++) {
		var text2append = arguments[i] + ": "+ object[arguments[i]];
		appendText(parent,"li",text2append);
	}
}
//------------------------10-----------------------------------

function mostrarbusqueda(){
	var temabusqueda = document.getElementById("topic");
	data("https://api.github.com/search/repositories?q="+temabusqueda.value, repoHandler);
}

//-----------------------------------------------------------

function data(url, handler) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.addEventListener("load", handler);
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}


//-------------------------------------------------------------
var gentelista = [{name:"John",age:"23",car:"Ford"},{name:"Machun",age:"32",car:"BMW"},
				{name:"Letha",age:"12",car:"None"},{name:"Alex.",age:"64",car:"Fiat"}];

function creartabla(lista){
	var tabla = document.body.getElementsByTagName("table")[0];
	var linea;
	lista.forEach(function(a){
		linea = document.createElement("tr");
		tabla.appendChild(linea);
		appendText(linea,"td",a.name);
		appendText(linea,"td",a.age);
		appendText(linea,"td",a.car);
	})
}

function init() {
	
	fadein.style.opacity = 0;
	var efecto = setInterval(fade,100,fadein,1,0.1,efecto);

	
	document.body.getElementsByClassName("jokes")[0].addEventListener('click', jokeclick);
	

	document.body.getElementsByClassName("errorbutton")[0].addEventListener('click', errorclick);

	
	var busqueda = "Javascript";
	getData("https://api.github.com/search/repositories?q="+busqueda, repoHandler);
	
	
	document.body.getElementsByClassName("botonbusqueda")[0].addEventListener('click', mostrarbusqueda);

	
	creartabla(gentelista);

}
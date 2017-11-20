window.onload = fade;
function fade()
{
	let title = document.getElementById('helloworld');
	title.style.opacity="0";
}

const READY_STATE_UNINITIALIZATED = 0;
const READY_STATE_LOADING = 1;
const READY_STATE_LOADED = 2;
const READY_STATE_INTERACTIVE = 3;
const READY_STATE_COMPLETE = 4;
var peticion_http;

if(window.XMLHttpRequest)
	peticion_http = new XMLHttpRequest();	//Navegadores modernos
function getJoke()
{
	peticion_http.onreadystatechange = showJoke;
	peticion_http.open("GET", "http://api.icndb.com/jokes/random", true);
	peticion_http.send(null);
	function showJoke()
	{
  		if(peticion_http.readyState == READY_STATE_COMPLETE && peticion_http.status == 200)
  		{
  			let element = document.createElement("p");
			let object = JSON.parse(peticion_http.responseText);
  			let content = document.createTextNode(object.value.joke);
  			element.appendChild(content);
  			document.getElementById('sectionJoke').appendChild(element);
  		}
	}
}
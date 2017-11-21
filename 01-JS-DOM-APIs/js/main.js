window.onload = fade;
function fade()
{
	let title = document.getElementById('helloworld');
	title.style.opacity="0";
}

function getJoke()
{
	var config = new Object();
	config.url = "http://api.icndb.com/jokes/random";
	config.type = "GET";
	getInfo(config);
}

function showInfo()
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
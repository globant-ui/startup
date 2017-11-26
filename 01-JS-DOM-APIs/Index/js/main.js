window.onload = fade;
function fade() {
	let title = document.getElementById('helloworld');
	title.style.opacity="0";
}

function getJoke() {
	var xhr = createCORSRequest("GET", "http://api.icndb.com/jokes/random");
	if(!xhr) {
		alert("CORS not supported by the browser");
	}
	makeCORSRequest(xhr);
}

function showInfo(xhr) {
	var joke = document.getElementById('sectionJoke');
	if (joke.hasChildNodes()) {
		joke.removeChild(joke.firstChild);
	}
	var element = document.createElement("p");
	var objectJoke = JSON.parse(xhr.responseText);
	var content = document.createTextNode(objectJoke.value.joke);
	element.appendChild(content);
	document.getElementById('sectionJoke').appendChild(element);
}
window.onload = fade;
function fade() {
	let title = document.getElementById('helloworld');
	title.style.opacity="0";
}

function getJoke() {
	config = {
		method: "GET",
		url: "http://api.icndb.com/jokes/random"
	};
	ajaxCall(config);
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
const mostrarSection = document.getElementById('statusSection');
window.onload = function(){
	mostrarSection.classList.add('showSection')
}

function jokesXMLHttpRequest(){ 

	var jokesXMLHttpRequest = new XMLHttpRequest(); //create an object with the constructor XMLHttpRequest()

	jokesXMLHttpRequest.open('GET', 'http://api.icndb.com/jokes/random', true); //open an specifyes  type of request:method, url, location asyn

	/*asyn operation,  wait for that operation to complete (e.g., the resource is returned from the network) 
	before do anything with that response, otherwise an error will be thrown
	i handle this using onload,  this is run when the load event fires*/
	jokesXMLHttpRequest.onload = function(){
		var jokesResponse = jokesXMLHttpRequest.responseText; //save text string response 
		var randomJoke = JSON.parse(jokesResponse); // JSON parse into javascript object
		document.getElementById('showJoke').innerHTML = randomJoke.value.joke; // set HTML element id="showJoke" content with de random joke value
	}
	//the setup is ready and now i run it with send() method
	jokesXMLHttpRequest.send();
}
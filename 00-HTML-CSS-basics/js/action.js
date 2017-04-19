/*Button function*/

document.getElementById("aButton").addEventListener("click", jokeApiConnect);

function jokeApiConnect(){
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api.icndb.com/jokes/random",false)
	xhr.send();
	document.getElementById("mainSection").innerHTML=xhr.responseText;	//Improve, we need the joke content not the object
}
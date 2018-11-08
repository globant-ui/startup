//EXERCISE START HERE!
function simpleXMLHttpRequest(method, url){
	// Create new promise with the Promise() constructor;
    // This has as its argument a function
	// with two parameters, resolve and reject
	var promise = new Promise(function(resolve, rejected){
		
		var request = new XMLHttpRequest();
 		request.open(method, url);
 		request.responseType = 'text';
 		//when the request load, check if all is ok
		request.onload = function(){
			if(request.status === 200){
				// If successful, resolve the promise by passing back the request response
				resolve(request.response);
			}else{
				//fails, reject the promise
				rejected(Error("Request Fail!"));
			}
		};
 		//
		request.onerror = function(){
			//when the entire request fails, probably a network problem
			rejected(Error("Network Fails"));
		};
		//setup ready now send de request
		request.send();
	});
 	return promise;
}
var myObject = {
	oMethod: "GET",
	oURL: "https://api.github.com/search/repositories?q=",
	oParameter: "JavaScript"
}
 var newSimpleRequest = simpleXMLHttpRequest(myObject.oMethod, myObject.oURL, myObject.oParameter );
// promise then() method on to the end of it. This contains two callbacks
newSimpleRequest.then(function(response){
	var jsonResponse = JSON.parse(response);
 	var ArrayNombresRepositorios = [];
 	for(let i=0; i < jsonResponse.items.length; i++)
	{
		ArrayNombresRepositorios.push(jsonResponse.items[i].name);
	}
	var string = "<ul>"
	for (const elemento of ArrayNombresRepositorios) {
		string = string + "<li> " + elemento + "</li>"
	}
	string = string + "</ul>"
	document.getElementById('mostrarResultados').innerHTML = string;
 }).catch(function(error){
	console.log(error);
	document.getElementById('mostrarResultados').innerHTML = "Algo anda mal!";
 });
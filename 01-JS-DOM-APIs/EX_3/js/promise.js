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

		//othe error
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
	myMethod: "GET",
	myURL: "http://api.icndb.com/jokes/random"
}

var newSimpleRequest = simpleXMLHttpRequest(myObject.myMethod, myObject.myURL);
// promise then() method on to the end of it. This contains two callbacks
newSimpleRequest.then(function(response){
	var jsonResponse = JSON.parse(response);
	document.getElementById('showJoke').innerHTML = jsonResponse.value.joke;
}).catch(function(error){
	console.log(error);
	document.getElementById('showJoke').style.color = "red";
	document.getElementById('showJoke').innerHTML = "Request Error";

});
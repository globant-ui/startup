function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if("withCredentials" in xhr) {
		//CHROME, MOZILLA, OPERA AND SAFARI CASE
		xhr.open(method, url, true);
	}
	else if(typeof XDomainRequest != "undefined") {
	 	//IE CASE
		xhr = new XDomainRequest() ;
		xhr.open(method, url);
	}
	else {
		//CORS ISNT SUPPORTED
		xhr = null;
	}
	return xhr;
}

function makeCORSRequest(xhr) {
	xhr.onload = function () {
		//if(xhr.readyState == 4 && xhr.status == 200)
		showInfo(xhr);
	}
	xhr.onerror = function () {
		alert("Sorry, there was an error making the request");
	}
	xhr.send();
}
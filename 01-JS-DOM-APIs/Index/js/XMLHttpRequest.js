function ajaxCall(config) {
	var xhr = new XMLHttpRequest();
	if("withCredentials" in xhr) {
		//CHROME, MOZILLA, OPERA AND SAFARI CASE
		xhr.open(config.method, config.url, true);
	}
	else if(typeof XDomainRequest != "undefined") {
	 	//IE CASE
		xhr = new XDomainRequest() ;
		xhr.open(method, url);
	}
	else {
		//CORS ISNT SUPPORTED
		alert("CORS not supported by the browser");
		return;
	}
	xhr.send();
	xhr.onload = function () {
		showInfo(xhr);
	}
	xhr.onerror = function () {
		alert("Sorry, there was an error making the request");
	}
}
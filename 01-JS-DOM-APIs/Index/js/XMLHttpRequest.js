function ajaxCall(config) {
	return  new Promise (function (resolve, reject) {
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
			resolve(this.responseText);
		}
		xhr.onerror = function () {
			reject();
		}
	});
}
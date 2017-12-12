function newItem (newText) {
	localStorage.setItem(newText, newText);
	showStorage();
	document.getElementById("txt").value = "";
}

function showStorage () {
	var dataZone = document.getElementById("localStoreData");
	dataZone.innerHTML = "Data With LocalStorage";
	for(var i = 0; i < localStorage.length; i++) {
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		dataZone.innerHTML += "<div>Text: "+value+"</div>";
	}
}

function clearAll () {
	if(confirm("Sure?")) {
		localStorage.clear();
		showStorage();
	}
}
function search() {
	var word = document.getElementById("textbox");
	if(word.value == "") {
		alert("Write something");
		return;
	}
	var url = "https://api.github.com/search/repositories" + "?q=" + word.value;
	var xhr = createCORSRequest("GET", url);
	makeCORSRequest(xhr);
}

function showInfo(xhr) {
	console.log(xhr.responseText);
	var list = document.getElementById("list");
	if (list.hasChildNodes()) {
		while (list.childNodes.length >= 1) {
			list.removeChild(list.firstChild);
		}
	}
	var obj = JSON.parse(xhr.response);
	if(obj.total_count == 0) {
		alert("No matches found");
	}
	for(var i = 0; i < obj.items.length; i++) {
		let element = document.createElement("li");
		let content = document.createTextNode(obj.items[i].full_name);
		element.appendChild(content);
		document.getElementById("list").appendChild(element);
	}
}
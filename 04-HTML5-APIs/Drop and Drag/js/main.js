window.onload = function () {
	drop = document.getElementById('dragDropZone');
	//REINICIAR EL COMPORTAMIENTO POR DEFECTO DEL NAVEGADOR
	drop.addEventListener("dragenter", function(e){e.preventDefault();}, false);
	drop.addEventListener("dragover", function(e){e.preventDefault();}, false);
	drop.addEventListener("drop", dropped, false);
}

function dropped (e) {
	e.preventDefault();
	var file = e.dataTransfer.files;
	if(file.length != 1) {
		alert("You must drag only one file");
		return;
	}
	drop.innerHTML = "<p>File Name: " + file[0].name + " - Size: " + (file[0].size/1024).toFixed(2) + "kb</p><br>";
	var reader = new FileReader();
	reader.onload = function (e) {
		var text = e.target.result;
		drop.innerHTML += text;
	}
	reader.readAsText(file[0]);
}
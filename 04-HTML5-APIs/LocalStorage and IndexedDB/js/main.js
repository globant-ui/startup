window.onload = function () {
	var btnSave = document.getElementById('btnSave');
	var btnClear = document.getElementById("btnClear");
	btnSave.addEventListener("click", funcSave, false);
	btnClear.addEventListener("click", funcClear, false);
	showStorage();
}

function funcSave() {
	var newText = document.getElementById("txt").value;
	newItem(newText);
}

function funcClear() {
	clearAll();
}
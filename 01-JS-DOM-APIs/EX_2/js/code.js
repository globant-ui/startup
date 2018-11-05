const mostrarSection = document.getElementById('statusSection');
window.onload = function(){
	mostrarSection.classList.add('showSection')
}
//first way to show the alert after click on the button
const botonAlerta = document.getElementById('btnOne');
botonAlerta.onclick = function(){
	alert("You suck! :(");
}
//second way
function message(){
	alert("You suck! :(");
}

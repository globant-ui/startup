$(document).ready(function(){

	var canvas=document.getElementById('canvas').getContext('2d');

	//rectangles
	canvas.fillStyle="blue";
	canvas.strokeStyle="orange";
	canvas.fillRect(50,0,80,40);
	canvas.strokeRect(50,50,150,80);

	//circle
	canvas.fillStyle="black";
	canvas.strokeStyle="red";
	canvas.beginPath();
	canvas.arc(100,200,50,0,2*Math.PI);
	canvas.stroke();
	canvas.closePath();

	//triangle
	canvas.fillStyle = "green";
	canvas.fillStroke = "black";
    
    canvas.beginPath();
    canvas.moveTo(300,200);
    canvas.lineTo(200,150);
    canvas.lineTo(200,200);
    canvas.fill();
    canvas.closePath();
});


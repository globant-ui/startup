var $ = require('jquery-2.1.4');
var Director=require('./JS/director.js');
var Movie= require('./JS/movie.js');

$(document).ready(function(){
	
	var alien= new Movie();
	var ridleyScott=new Director('Ridley Scott'); /* It doesn't work */
	
	alien.set('title','Alien');
	alien.set('director',ridleyScott);
	ridleyScott.set('quotes',['A hit for me is if I enjoy the movie, if I personally enjoy the movie.']);

	$('#director').text(alien.get('director').get('name')); /* Where can I see this? */
	$('#movie').text(alien.get('title')); /* Where can I see this? */
	$('#getQuote').click(function()
	{
		$('#quote').text("Ridley Scott says: "+alien.get('director').speak(0)); // Ridley scott is hardcoded.
	});
});
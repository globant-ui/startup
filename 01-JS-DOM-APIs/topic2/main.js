document.addEventListener("DOMContentLoaded", test);


function movie (title, year, duration) {
	EventEmitter.call(this);
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.actors = [];
}

movie.prototype= Object.create(EventEmitter.prototype)

movie.prototype.play = function() {
    	console.log("Playing:", this.title);
    	this.emit("play");
}

movie.prototype.pause = function() {
    	console.log("Paused:", this.title);
    	this.emit("pause");
}

movie.prototype.resume = function() {
    	console.log("Resumed:", this.title);
    	this.emit("resume");
}

movie.prototype.addCast = function (cast){
    	this.actors = this.actors.concat(cast);
}



function EventEmitter() {
	this.map = Object.create(null);

	this.on = function (evento, accion) {
		this.map[evento] = accion;
	};

	this.emit = function (evento) {
		if (this.map[evento]!=null){
			this.map[evento](event);
		}
	};

	this.off = function(evento){
		delete this.map[evento];
	};
}



function Logger(){
	this.log = function(info) {
		console.log("The " + info + " event has been emitted");
	}
}


var social = {
	share: function(amigo){
		return "Share " + this.title + " with " + amigo;
	},
	like: function(amigo){
		return amigo +" likes "+ this.title;
	}
}


function Actor(nombre,edad){
	this.nombre = nombre;
	this.edad = edad;
}

//----------------------------------------------------
function test() {
	
	var logger = new Logger();
	terminator = new movie("Terminator","1984","108");
	terminator.play();
	terminator.pause();
	terminator.resume();
	unbreakable = new movie("Unbreakable","2000","107");
	unbreakable.play();
	unbreakable.pause();
	unbreakable.resume();
	console.log("fin ejercicio 2");
//----------------------------------------------------
	terminator.on("play",logger.log);
	terminator.on("pause",logger.log);
	terminator.on("resume",logger.log);
	terminator.play();
	terminator.pause();
	terminator.resume();
	terminator.off("play");
	terminator.off("pause");
	terminator.off("resume");
	

	unbreakable.on("play",logger.log);
	unbreakable.on("pause",logger.log);
	unbreakable.on("resume",logger.log);
	unbreakable.play();
	unbreakable.pause();
	unbreakable.resume();
	unbreakable.off("play");
	unbreakable.off("pause");
	unbreakable.off("resume");
	console.log("fin ejercicio 5");
//----------------------------------------------------
	
	Object.assign(terminator, social);
	Object.assign(unbreakable, social);
	console.log(terminator.share('Carlos'));
	console.log(unbreakable.like('Roberto'));
	console.log("fin ejercicio 6");
//----------------------------------------------------
	var act = new Actor('Jason Momoa', 37);
	
	var cast = [
	new Actor('Paul Winfield', 50),
	new Actor('Michael Biehn', 50),
	new Actor('Linda Hamilton', 50)];

	terminator.addCast(act);
	terminator.addCast(cast);
	console.log(terminator.actors);

	console.log("fin ejercicio 7 y 8");
}
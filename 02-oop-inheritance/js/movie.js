/*Exercise 1*/

class Movie {
	
	constructor(title, year, duration){
		this.title = title;
		this.year = year;
		this.duration = duration;
	}

	play(){
		console.log(this.title +" is being played")
	}

	pause(){
		console.log(this.title +" paused")
	}

	resume(){
		this.play();
	}
};

/*Exercise 3*/

class EventEmitter {
	
	constructor(){
		this.eventList = {};
	}

	on (eventName, cb){ //What to call when the event is emitted
	if(!this.eventList[eventName]){
		this.eventList[eventName] = [];	//If there are no events, we create the array
	}
	this.eventList[eventName].push(cb); //We insert the callback function to be executed in the event list
	}

	emit (eventName, data){ //Event catcher
	const event = this.eventList[eventName]; //We retrieve the functions to be executed in case of this event
		//how?	
	}

	off (eventName) { //Deletes the event
	this.eventList.pop(eventName);
	}
}

/*Exercise 2*/

const aMovie = new Movie ("Sharknado",2015,125);

function playMovie(){
	aMovie.play();
	console.log(aMovie.title,aMovie.year,aMovie.duration);
	console.log(aMovie);	
}

function pauseMovie(){
	aMovie.pause();
}

function resumeMovie(){
	aMovie.resume();
}

const emitter = new EventEmitter();

emitter.on('play', aMovie.play());

emitter.emit('play',aMovie);

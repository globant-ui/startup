import eventEmitter from './modules/eventEmitter.js';
export default class Movie extends EventEmitter {
	    constructor(title, year, duration) {
	        super();
	        this.title = title;
	        this.year = year;
	        this.duration = duration;
	        this.cast = [];
	    }
	    play() {
	        super.emit('play');
	        alert("play");
	    }
	    pause() {
	        super.emit('pause');
	        alert("pause");
	    }
	    resume() {
	        super.emit('resume');
	        alert("resume");
	    }
	    addCast(actors) {
	        this.cast = this.cast.concat(actors);  
	    }
	};
	
 
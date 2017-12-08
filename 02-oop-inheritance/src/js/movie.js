import EventEmitter from 'eventEmitter.js';

class Movie extends EventEmitter {

  constructor(name, year, duration) {
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.casts = [];
  }

  play() {
    this.emit("play", 'play'); 
    /* We could ommit the second argument but in order to do that 
    we would need to change the "emit" definition where we call
    the listener. Instead of passing "...args" we should pass
    the event parameter.
    */
  }

  pause() {
    this.emit("pause", 'pause');
  }

  resume() {
    this.emit("resume", 'resume');
  }

  addCast(cast) {
    console.log(typeof(cast));
    /*
    if(cast.length != null){
      this.casts.push(cast);
    }
    else {
      this.cast.push(cast);
    }*/
  }
  
}

export default Movie;
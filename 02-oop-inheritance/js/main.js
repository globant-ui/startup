window.onload = function() {

  let terminator = new Movie('Terminator', 1984, 90);
  let logger = new Logger();
  terminator.on('play', logger.log);
  terminator.on('pause', logger.log);
  terminator.play();
  terminator.pause();
//  terminator.off('play');
//  terminator.play(); This will throw an error because there is no listener for it.

  //Exercise 6.

  let movie = Object.assign(terminator, social);
  console.log(movie);
  movie.share("Globant");
  movie.like("DOOM");

  //Exercise 8.

  let terminator_II = new Movie('Terminator_II', 1985, 60);
  let arnold = new Actor('Arnold Schwarzenegger', 50);
  let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
  ];

  terminator_II.addCast(arnold);
  terminator_II.addCast(otherCast);
  console.log(terminator_II);

}

/*Create an EventEmitter class with the following methods: on, emit, off. 
The on method will allow to pass a callback or listener that will be executed 
each time a given event is triggered. The emit method will allow a class to 
trigger events to be consumed by other functions/objects. The off method will 
delete the listener.*/

class EventEmitter {

  constructor() {
    this.listeners = new Map();
  }

  addListener(event, callback) {
    if(!this.listeners.has(event)){
      this.listeners.set(event, callback);
    }
  }

  removeListener(event) {
    this.listeners.delete(event);
  }

  on(event, callback) {
    this.addListener(event, callback);
  }

  emit(event, ...args) {
    let listener = this.listeners.get(event);

    listener(...args); // Or we could change it for event instead of args (see next commentary).
  }

  off(event) {
    this.removeListener(event);
  }
}

class Movie extends EventEmitter {

  constructor(name, year, duration) {
    super();
    this.name = name;
    this.year = year;
    this.duration = duration;
    this.cast = [];
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
    if(cast.length != null){
      for(let i = 0; i < cast.length; i++){
        this.cast.push(cast[i]);
      }
    }
    else {
      this.cast.push(cast);
    }
  }
}

class Logger {

  constructor() {

  }

  log(info) {
    console.log("The '" + info +"' event has been emitted");
  }
}

/*Exercise 6*/

let social = {
  share: function(friendName) {
    console.log(`Share ${this.name} with ${friendName}`);
  },
  like: function(friendName) {
    console.log(`${friendName} likes ${this.name}`);
  }
}

/*Exercise 7 - 8 */

class Actor {

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

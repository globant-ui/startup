class EventEmitter {
  on(event, callback){
    document.addEventListener(event, callback);
  }
  emit(event){
    document.dispatchEvent(event);
  }
  off(event){
    document.removeEventListener(event, callback);
  }
};

class Movie extends EventEmitter{
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast=[];
    this.playEvent = new CustomEvent("play");
    this.pauseEvent = new CustomEvent("pause");
    this.resumeEvent = new CustomEvent("resume");
  }
  play () {
    this.emit(this.playEvent);
  }
  pause () {
    this.emit(this.pauseEvent);
  }
  resume () {
    this.emit(this.resumeEvent);
  }
  addCast(cast){
    if ( Array.isArray(cast) ){
      this.cast = this.cast.concat(cast);
      return;
    }
    this.cast.push(cast);
  }
};

class Logger {
  log(event){
    console.log("The " + event + " has been emitted");
  }
};

class Actor {
  constructor(name, age){
    this.name = name;
    this.age =  age;
  }
};

let Social = {
  share(friendName){
    console.log(friendName + " shares " + this.title);
  },
  like(friendName){
    console.log(friendName + " likes " + this.title);
  }
};

Object.assign(Movie.prototype, Social);

let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();

let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
];

terminator.on('play', logger.log("play"));

terminator.play();

terminator.share("baucho");

terminator.addCast(arnold);
terminator.addCast(otherCast);

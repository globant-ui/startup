class EventEmitter {

  constructor() {
    this.events = {
    }
  }

  on(event, callback){
    this.events[event] = callback
  }

  emit(event){
    this.events[event](event)
  }

  off(event){
    delete this.events[event]
  }
}

class Movie extends EventEmitter{
  constructor(title, year, duration) {
    super()
    this.title = title
    this.year = year
    this.duration = duration
  }


  play(){
    this.emit("play")
  }

  pause(){
    this.emit("pause")
  }

  resume(){
    this.emit("resume")
  }
}

class Logger {
  constructor() {

  }

  log(info){
    console.log("output: The " + info + " event has been emitted")
  }
}

let social = {
  share: function(friendName){
    console.log(`${friendName} shares ${this.title}`);
  },
  like: function(friendName){
    console.log(`${friendName} likes ${this.title}`);
  }
}

let movie1 = new Movie("Batman inicia", "2005", 120);
let logger = new Logger();
let movie2 = new Movie("Spiderman 3", "2007", 150);
let movie3 = new Movie("The Avengers", "2012", 130);

movie1.on("play", logger.log);
movie1.on("resume", logger.log);
movie1.on("pause", logger.log);
movie1.play();
movie1.resume();
movie1.pause();

let batmanInicia = Object.assign(movie1, social);

batmanInicia.share("Juancito Perez");
batmanInicia.like("");

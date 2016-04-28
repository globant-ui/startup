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
    this.cast = []
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

  addCast(cast){
    let self = this
    if(Array.isArray(cast)){
      cast.forEach(function(actor){
        self.cast.push(actor)
      })
    }else{
      this.cast.push(cast)
    }
  }
}

class Actor {
  constructor(name, age) {
    this.name = name
    this.age = age
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

let cristianBale = new Actor("Christian Bale", 30);
let otherCast = [
 new Actor('Morgan Freeman', 40),
 new Actor('Gary Oldman', 25),
 new Actor('Katie Holmes', 37)
];

movie1.on("play", logger.log);
movie1.on("resume", logger.log);
movie1.on("pause", logger.log);
movie1.play();
movie1.resume();
movie1.pause();

let batmanInicia = Object.assign(movie1, social);

batmanInicia.share("Juancito Perez");
batmanInicia.like("Pedro Juarez");

batmanInicia.addCast(cristianBale);
batmanInicia.addCast(otherCast);

console.log(movie1.cast);

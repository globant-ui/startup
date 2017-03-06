class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  on(event, listener) {
    if (this.listeners[event] != undefined) {
      this.listeners[event].push(listener);
    }
  }
  emit(event) {
    for (var i = listeners.length - 1; i >= 0; i--) {
      if(listeners[i]===event)
        console.log("listener", listeners[i]);
    }
  }
  off(event, listener) {
    if (this.listeners[event] != undefined){
      this.listeners[event].pop();
    }
  }
};

class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play() {
    super.emit('play');
    console.log("playing ", this.title);
  }
  pause() {
    super.emit('pause');
    console.log("paused ", this.title);    
  }
  resume() {
    super.emit('resume');
    console.log("resume ", this.title);
  }
  addCast(actors) {
    this.cast = this.cast.concat(actors);
  }
};

class Logger {
  constructor(){}
  log(info){
    console.log(info);
  }
};

class Actor {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
};

let Social={
  share: function(friendName){
    console.log("share", this.title, "with", friendName);
  },
  like: function(friendName){
    console.log(friendName, "likes", this.title);
  }
};

let DennistheMenace = new Movie("Dennis the Menace", 1993, 96);
let TheNeverEndingStory = new Movie("The Never Ending Story", 1984, 107);
let TheNakedGun = new Movie("The Naked Gun", 1988, 87);
let PulpFiction = new Movie("Pulp Fiction", 1994, 178);

DennistheMenace = Object.assign(Social, DennistheMenace);
DennistheMenace.share('Malena');
DennistheMenace.like('Malena');

let ChristopherLloyd = new Actor('Christopher Lloyd', 78);
let otherCast = [
 new Actor('Walter Matthau', 80),
 new Actor('Lea Thompson', 55),
 new Actor('Natasha Lyonne', 37)
];

DennistheMenace.addCast(ChristopherLloyd);
DennistheMenace.addCast(otherCast); 

let logger = new Logger();

DennistheMenace.on('play', logger.log("estoyEscuchando"));

DennistheMenace.play();


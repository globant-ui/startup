class EventEmitter {
    constructor() {
      // listeners object will store events as keys and arrays of listeners as values
      this.listeners = {};
    }
    on(event, listener) {
        if (this.listeners[event] === undefined) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }
    emit(event) {
        this.listeners[event].forEach(function(fn){
            console.log("executing a listener");
            fn.call();
        })
    }
    off(event, listener) {
        if (this.listeners[event] === undefined){
            console.log("nothing to remove");
        }
        else {
            let deletedListener = this.listeners[event].pop();
            console.log("deleted", deletedListener);
        }
    }
};

class Logger {
    constructor(){}
    log(info){
        console.log(info);
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
        console.log("playing ", this.title);
        super.emit('play');
    }
    pause() {
        super.emit('pause');
        // console.log(this.title, " paused")
        // this.info = "playing"
    }
    resume() {
        super.emit('resume');
        // console.log("continue playing ", this.title)
    }
    addCast(actors) {
        // for (var actor in actors) {
        //     this.cast.push(actor);
        // }
        this.cast = this.cast.concat(actors);
    }
}

class Actor {
  constructor(firstName, lastName, bornIn){
    this.firstName = firstName;
    this.lastName = lastName;
    this.bornIn = bornIn;
  }
}

let Social = {
  share: function(friendName){
    console.log("share", this.title, "with", friendName);
  },
  like: function(friendName){
    console.log(friendName, "likes", this.title);
  }
}
// let logger = new Logger();
let gladiator = new Movie("gladiator", 1998, 120);
let fightclub = new Movie("fight club", 1998, 120);
let grandhotel = new Movie("grand hotel budapest", 2015, 130);

// fightclub.on('play', logger.log)
fightclub.on('play', function() {fightclub.play});
fightclub.on('play', function() {console.log("hola")});
fightclub.on('play', function() {console.log("2do listener")});
// console.log(fightclub.listeners);
// fightclub.play();
//fightclub = Object.assign(Social, fightclub);
// fightclub.share('guille');
// fightclub.like("mariano");

let cast = [
    new Actor('Brad', 'Pitt', 'Shawnee, US'),
    new Actor('Edward', 'Norton', 'Boston, US'),
    new Actor('Helena', 'Bonham Carter', 'Islington, UK')
];

//console.log(cast);
console.log(fightclub);
fightclub.addCast(cast);
console.log(fightclub);

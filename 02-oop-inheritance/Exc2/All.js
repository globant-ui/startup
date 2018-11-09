// This file contains all the classes to be compiled here and tested.
// There is also an index.js file that has the same operation as this All.js 
// but that imports the classes.

class Logger {
    constructor() {

    }
    log(eventName) {
        console.log(`event ${eventName} is active`);
    }
}

class EventEmitter extends Logger {
    constructor() {
        super();
        this.events = [];
    }

    on(eventName, callback) { // 'on' is used to add a callback function that’s going to be executed when the event is triggered || Eventname = play, pause, resume.
        // 'EventName' is a string and 'callback' is a function
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }
    emit(eventName) { // emit is used to trigger an event
        if (this.events[eventName]) {
            this.events[eventName].forEach(cb => {
                this.log(eventName);
                cb();
            });
        }
    }
    off(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].splice(this.events[eventName], this.events[eventName].length);
        }
    }
}

class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }

    play() {
        super.emit("Play");
    }

    pause() {
        super.emit("Pause");
    }

    resume() {
        super.emit("Resume");
    }

    addCast(actor) {
        if (actor.length != undefined) {
            for (var i = 0; i < actor.length; i++) {
                this.cast.push(actor[i]);
            }
        } else {
            this.cast.push(actor);
        }
    }
}

var Social = {
    share(friendName) {
        console.log(`${friendName} is sharing with you.`);
    },
    like(friendName) {
        console.log(`${friendName} likes the movie.`);
    }
}

class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var Terminator = new Movie("Terminator", 1996, 180);
var arnold = new Actor("Arnold Schwarzenegger", 50);
Object.assign(Movie.prototype, Social); // Mixing
Terminator.addCast(arnold);
var othercast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
Terminator.addCast(othercast);

Terminator.share("Gonzalo");
Terminator.like("Gonzalo");
Terminator.on("Play", function() {
    console.log("Play Event");
});
Terminator.on("Pause", function() {
    console.log("Pause Event");
});
Terminator.on("Resume", function() {
    console.log("Resume Event");
});
Terminator.play();
Terminator.pause();
Terminator.resume();
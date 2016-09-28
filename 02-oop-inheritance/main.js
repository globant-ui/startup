// once the DOM has loaded
window.onload = function() {
    let Gladiator;
    let Armageddon;
    let Terminator;
    let EventEmitter;
    let methodStatus;
    let listenerOne;
    let Social;
    let Actors;
    let otherCast;

    // create the class 'EventEmitter'
    // an object that allows another objects to watch it
    EventEmitter = class {  
        constructor() {
            // initialize a 'map'
            this.listeners = new Map();
        }
  
        // method 'on' (pass a callback that will be executed each time a given event is triggered)
        on(label, callback) {
            this.listeners.has(label) || this.listeners.set(label, []);
            this.listeners.get(label).push(callback);
        }

        // method 'emit' (allows the class to trigger events)
        emit(label) {
            return this.listeners.get(label);
        }

        // method 'off' (deletes the listener)
        off(label, callback) {
            this.listeners.delete(label, callback);
        }
    }

    // first object
    listenerOne = new EventEmitter();

    // execute the three methods
    // listenerOne.on("movieOne", methodStatus("On"));
    // listenerOne.emit(methodStatus("Emit"));
    // listenerOne.off(methodStatus("Off"));

    // create the class 'movie'
    class Movie extends EventEmitter {
        // the movie class has 3 properties
        constructor(name, year, duration) {
            // super 'keyword' brings the methods of the father
            super();
            this.kind = "Movie";
            this.name = name;
            this.year = year;
            this.duration = duration;
            this.array = [];
        }

        // .. and 3 methods
        play() {
            EventEmitter.emit("play");
        }

        pause() {
            EventEmitter.emit("pause");
        }

        resume() {
            EventEmitter.emit("resume");
        }

        addCast(actor) {
            this.array = this.array.concat(actor);
        }
    }

    // instances of 'movie' class (objects)
    Gladiator = new Movie("Gladiator", "2000", "2h 51m");
    Armageddon = new Movie("Armageddon", "1998", "2h 33m");
    Terminator = new Movie("Terminator II", "1991", "2h 34m");

    class Logger {
        log(info) {
            console.log(`The ${info} event has been emitted`);
        }
    }

    let logger = new Logger();

    Gladiator.on('play', logger.log("'play'"));

    // Exercise 6
    Social = { 
        share(friendName) {
            console.log(`Share ${Gladiator.name} with ${friendName}`);
        }, 

        like(friendName) {
            console.log(`Like ${Gladiator.name} with ${friendName}`);
        } 
    };

    Object.assign(Gladiator, Social);
    Gladiator.share("Nicolas Farruggia");

    // Exercise 7
    Actor = class {
        constructor(name, age) {
            this.kind = "Actor";
            this.name = name;
            this.age = age;
        }
    }

    Bruce = new Actor("Bruce Willis", "65");
    otherCast = [
        new Actor("Ben Affleck", "45"),
        new Actor("Liv Tyler", "38"),
    ];

    // Exercise 8
    Object.assign(Armageddon, Movie);
    Armageddon.addCast(otherCast);
}
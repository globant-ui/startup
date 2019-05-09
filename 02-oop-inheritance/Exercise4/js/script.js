class EventEmitter {
    on(event, callback) {
        document.addEventListener(event, callback);
    }
    emit(event) {
        document.dispatchEvent(event);
    }
    off(event) {
        document.removeEventListener(event, callback);
    }
}

class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.cast = [];
        this.playEvent = new CustomEvent("play");
        this.pauseEvent = new CustomEvent("pause");
        this.resumeEvent = new CustomEvent("resume");
    }
    play() {
        this.emit(this.playEvent);
    }
    pause() {
        this.emit(this.pauseEvent);
    }
    resume() {
        this.emit(resumeEvent);
    }
    addCast(cast) {
        if (Array.isArray(cast)) {
            this.cast = this.cast.concat(cast);
            return;
        }
        this.cast.push(cast);
    }
}

class Logger {
    log(event) {
        console.log(`The ${event}'s event has been emited`);
    }
}

let Social = {
    share(friendName) {
        console.log(friendName + " shares " + this.title);
    },
    like(friendName) {
        console.log(friendName + " likes " + this.title);
    }
};

Object.assign(Movie.prototype, Social);

const logger = new Logger();
const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);
terminator.share("Chuck Norris");
terminator.like("Chuck Norris");
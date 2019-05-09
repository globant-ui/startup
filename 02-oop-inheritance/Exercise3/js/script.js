class EventEmitter {
    func(event, logger) {
        logger(event, "Triggered");
    }
    on(event, logger) {
        document.addEventListener(event.type, this.func(event, logger));
    }
    emit(event) {
        document.dispatchEvent(event);
    }
    off(event, logger) {
        document.removeEventListener(event.type, this.func(event, logger))
    }
}

class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Movie {
    constructor(name, year, duration) {
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.cast = [];
    }
    play(logger) {
        let play = new CustomEvent("play");
        this.on(play, logger);
        this.emit(play);
    }
    pause(logger) {
        let pause = new CustomEvent("pause");
        this.on(pause);
        this.emit(pause);
    }
    resume(logger) {
        let resume = new CustomEvent("resume");
        this.on(resume);
        this.emit(resume);
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
    log(event, info) {
        console.log(event.type + " " + info);
    }
}

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(actors);
console.log(terminator.cast);
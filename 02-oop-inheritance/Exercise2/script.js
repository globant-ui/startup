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
}
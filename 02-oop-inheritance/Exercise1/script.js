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
    play() {

    }
    pause() {

    }
    resume() {

    }
}

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
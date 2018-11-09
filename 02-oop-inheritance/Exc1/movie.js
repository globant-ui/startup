// MOVIE CLASS
class Movie {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {
        console.log("the movie is playing.");
    }

    pause() {
        console.log("the movie is paused.")
    }

    resume() {
        console.log("Resume of the movie.")
    }
}

// ACTOR CLASS
class Actor {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


// EVENTEMITTER CLASS
class EventEmitter {
    constructor() {

    }

    on(eventName, callback) {

    }
    emit(eventName) {

    }
    off(eventName, callback) {

    }

}
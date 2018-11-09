import { EventEmitter } from "./eventEmitter";

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
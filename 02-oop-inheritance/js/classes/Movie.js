class Movie extends EventEmitter {
    constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.actors = [];
    }
    play() {
        super.emit('Play');

    }

    pause() {
        super.emit('Pause');
    }

    resume() {
        super.emit('Resume');
    }

    addCast(cast) {
        const actors = this.actors;
        if (Array.isArray(cast)) {
            actors.forEach(function (e) {
                actors.push(e);
            });
        } else {
            actors.push(cast);
        }
    }

}

export default Movie;
//module movie.js
import {EventEmitter} from "./eventEmitter";

class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  play() {
    this.emit("play");
  }

  pause() {
    this.emit("pause");
  }

  resume() {
    this.emit("resume");
  }

  addCast(actors) {
    this.cast = this.cast.concat(actors);
  }
}

export { Movie }

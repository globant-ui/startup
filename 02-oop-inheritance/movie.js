 export default class Movie extends EventEmitter {
      constructor(title, year, duration) {
          super();
          this.title = title;
          this.year = year;
          this.duration = duration;
          this.cast = [];
      }
      play() {
          console.log("playing ", this.title);
          super.emit('play');
      }
      pause() {
          super.emit('pause');
          // console.log(this.title, " paused")
          // this.info = "playing"
      }
      resume() {
          super.emit('resume');
          // console.log("continue playing ", this.title)
      }
      addCast(actors) {
          // for (var actor in actors) {
          //     this.cast.push(actor);
          // }
          this.cast = this.cast.concat(actors);
      }
  }
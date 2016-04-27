class Movie {
  constructor(title, year, duration) {
    this.title = title
    this.year = year
    this.duration = duration
  }

  play(){
    console.log("play: " + this.title);
  }

  pause(){
    console.log("pause: " + this.year);
  }

  resume(){
    console.log("duration: " + this.year);
  }
}

let movie1 = new Movie("Batman inicia", "2005", 120);
let movie2 = new Movie("Spiderman 3", "2007", 150);
let movie3 = new Movie("The Avengers", "2012", 130);

movie1.play();

class EventEmitter {
  this.listener

  constructor() {

  }

  on(listener){
    this.listener = listener
  }

  emit(class){
    
  }

  off(){
    this.listener = null
  }
}

import Movie from "/js/classes/Movie";
import Actor from "/js/classes/Actor";
import Logger from "/js/classes/Logger";
import EventEmitter from "/js/classes/EventEmitter";
import social from "/js/classes/social";

let movie1 = new Movie("Batman inicia", "2005", 120);
let logger = new Logger();

let cristianBale = new Actor("Christian Bale", 30);
let otherCast = [
 new Actor('Morgan Freeman', 40),
 new Actor('Gary Oldman', 25),
 new Actor('Katie Holmes', 37)
];

movie1.on("play", logger.log);
movie1.on("resume", logger.log);
movie1.on("pause", logger.log);
movie1.play();
movie1.resume();
movie1.pause();

let batmanInicia = Object.assign(movie1, social);

batmanInicia.share("Juancito Perez");
batmanInicia.like("Pedro Juarez");

batmanInicia.addCast(cristianBale);
batmanInicia.addCast(otherCast);

console.log(movie1.cast);

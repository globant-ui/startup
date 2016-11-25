//---TESTING MOVIE, LOGGER, SOCIAL, ACTOR---
import {Actor} from "./actor";
import {social} from "./social";
import {EventEmitter} from "./eventEmitter";
import {Movie} from "./movie";
import {Logger} from "./logger";

let terminator = new Movie('Terminator', 1984, 90);
let logger = new Logger();
Object.assign(terminator, social);
terminator.on("play", logger.log);
setTimeout(function() {
  terminator.play();
}, 2000);
terminator.share("Mike Blossom");
terminator.like("Robert");

let arnold = new Actor('Arnold Schwarzenegger', 50);
let otherCast = [
 new Actor('Paul Winfield', 50),
 new Actor('Michael Biehn', 50),
 new Actor('Linda Hamilton', 50)
];

terminator.addCast(arnold);
terminator.addCast(otherCast);
//---  ---

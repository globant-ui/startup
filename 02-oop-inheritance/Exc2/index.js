// This file imports the classes used to be able to work.
// There is also an All.js file that contains all the classes without importing 
// and that can be executed from that same All.js file

import { Actor } from "./actor.js";
import { Movie } from "./movie.js";
import { EventEmitter } from "./eventEmitter.js";
import { Logger } from "./logger.js";

var Terminator = new Movie("Terminator", 1996, 180);
var arnold = new Actor("Arnold Schwarzenegger", 50);
Object.assign(Movie.prototype, Social); // Mixing
Terminator.addCast(arnold);
var othercast = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
Terminator.addCast(othercast);
// console.log(Terminator.cast);

Terminator.share("Gonzalo");
Terminator.like("Gonzalo");
Terminator.on("Play", function() {});
Terminator.on("Pause", function() {});
Terminator.on("Resume", function() {});
Terminator.play();
Terminator.pause();
Terminator.resume();
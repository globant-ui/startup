import Actor from "./Actor.js";
import Movie from "./Movie.js";
import Logger from "./Logger.js";
import Social from "./Social.js";

let Batman = new Movie('Batman', 1900, 32);
let Log = new Logger();
Batman.on("play", Log.log);
Batman.on("play", Log.test);
Batman.on("stop", Log.log);
// Batman.off("play", Log.test);
Batman.play();
Batman.stop();
console.log(Batman.event);

let Will = new Actor('Will Smith', 22);
let OtherActors = [
    new Actor('Brad Pitt', 33),
    new Actor('Leonardo Di Caprio', 44)
];
Batman.addCast(Will);
Batman.addCast(OtherActors);
console.log(Batman.cast);

Object.assign(Batman, Social);
Batman.like('Pedro');
Batman.share('Juan');

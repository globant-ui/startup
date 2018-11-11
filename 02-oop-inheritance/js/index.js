import {EventEmitter} from "js/classes/EventEmitter.js";
import {Actor}from "js/classes/Actor";
import {Logger} from "js/classes/Logger";
import {Movie}from "js/classes/Movie";
import {social}from "js/classes/Social"; 


const terminatrMovie = new Movie('TerminatorMovie I', 1985, 60);
const terminatorActor = new Actor('terminatorActor Schwarzenegger', 50);
const terminatorActors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
terminatorMovie.addCast(terminatorActor);
terminatorMovie.addCast(terminatorActors);

//let 's suppose that's when we emit Play we will have two suscriber, play and ads
let playTheMovie = function playTheMovie() { console.log(`Playing the movie ${terminatorMovie.title}  -  ${terminatorMovie.year}`) };
terminatorMovie.on('Play', playTheMovie);

let adsTheMovie = function adsTheMovie() { console.log('Movie Ads') };
terminatorMovie.on('Play', adsTheMovie);

//logger
let logger = new Logger();
terminatorMovie.on('Play', logger.log);


//other events listener...
terminatorMovie.on('Pause', function () { console.log(`Pausing the movie ${terminatorMovie.title}`) });
terminatorMovie.on('Resume', function () { console.log(`Resuming the movie ${terminatorMovie.title}`) });

//mix social
let mix = Object.assign(terminatorMovie, social);
terminatorMovie.share('Norman B');
terminatorMovie.like('Paul P');

terminatorMovie.play();
terminatorMovie.pause();
terminatorMovie.resume();



console.log(terminatorMovie.events); // show terminatorMovie events within the object 
terminatorMovie.off('Play', playTheMovie);
console.log(terminatorMovie.events); //show terminatorMovie events bus i remove an element at Play event within the object

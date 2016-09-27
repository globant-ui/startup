'use strict';
import * as Actor from './modules/actors.js';
import * as EventEmitter from './modules/event_emitter';
import * as Logger from './modules/logger';
import * as Movie from './modules/movie';

let Social = {
  share: function(friendName){
    console.log("share", this.title, "with", friendName);
  },
  like: function(friendName){
    console.log(friendName, "likes", this.title);
  }
}
// let logger = new Logger();
let gladiator = new Movie("gladiator", 1998, 120);
let fightclub = new Movie("fight club", 1998, 120);
let grandhotel = new Movie("grand hotel budapest", 2015, 130);

// fightclub.on('play', logger.log)
fightclub.on('play', function() {fightclub.play});
fightclub.on('play', function() {console.log("hola")});
fightclub.on('play', function() {console.log("2do listener")});
// console.log(fightclub.listeners);
// fightclub.play();
//fightclub = Object.assign(Social, fightclub);
// fightclub.share('guille');
// fightclub.like("mariano");

let cast = [
    new Actor('Brad', 'Pitt', 'Shawnee, US'),
    new Actor('Edward', 'Norton', 'Boston, US'),
    new Actor('Helena', 'Bonham Carter', 'Islington, UK')
];

//console.log(cast);
console.log(fightclub);
fightclub.addCast(cast);
console.log(fightclub);

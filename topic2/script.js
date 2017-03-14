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

let logger = new Logger.Logger();
let gladiator = new Movie.Movie("gladiator", 1998, 120);
let fightclub = new Movie.Movie("fight club", 1998, 120);
let grandhotel = new Movie.Movie("grand hotel budapest", 2015, 130);

fightclub.on('play', logger.log);
fightclub.play();

let cast = [
    new Actor.Actor('Brad', 'Pitt', 'Shawnee, US'),
    new Actor.Actor('Edward', 'Norton', 'Boston, US'),
    new Actor.Actor('Helena', 'Bonham Carter', 'Islington, UK')
];

fightclub.addCast(cast);
Object.assign(fightclub, Social);
fightclub.share("Agustin");
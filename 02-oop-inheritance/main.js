import {Movie} from "./movie.js";
import Actor from "./actor.js";
import EventEmitter from "./eventemitter.js";
import Logger from "./logger.js";


let avengers = new Movie("avengers I",2012,183);
let robert = new Actor("robert downey jr",53);
let logger = new Logger();
let moreActors = {
    chris:new Actor('chris evans',37),
    scarlett:new Actor('scarlett johansson', 33),
}

let social = {
    share: function(friendName){
        console.log("Share "+this._title+" with "+friendName);
    }, 
    like: function(friendName){
        console.log(friendName+" like "+this._title);
    },
};

//examples
avengers.addCast(moreActors);
avengers.addCast(robert);
avengers.on('play',logger.log);
avengers.off('play');
avengers.play();
console.log(avengers.actors);
let iroman = new Movie("ironman",2008,126);
iroman.share('lucas saldias');
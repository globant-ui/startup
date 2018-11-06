import Movie from "/Users/lucassaldias/Lucas_Saldias_rosario-web-ui-bootcamp-11-2018.-/02-oop-inheritance/movie.js";
import Actor from "/Users/lucassaldias/Lucas_Saldias_rosario-web-ui-bootcamp-11-2018.-/02-oop-inheritance/actor.js";
import EventEmitter from "/Users/lucassaldias/Lucas_Saldias_rosario-web-ui-bootcamp-11-2018.-/02-oop-inheritance/eventemitter.js";
import Logger from "/Users/lucassaldias/Lucas_Saldias_rosario-web-ui-bootcamp-11-2018.-/02-oop-inheritance/logger.js";


let avengers = new Movie("avengers I",2012,183);
let robert = new Actor("robert downey jr",53);
let logger = new Logger();
let moreActors = {
    chris:new Actor('chris evans',37),
    scarlett:new Actor('scarlett johansson', 33),
}
avengers.addCast(moreActors);
avengers.addCast(robert);
avengers.on('play',logger.log);
avengers.off('play');
avengers.play();
console.log(avengers.actors)

let social = {
    share: function(friendName){
        console.log("Share "+this._title+" with "+friendName);
    }, 
    like: function(friendName){
        console.log(friendName+" like "+this._title);
    },
};


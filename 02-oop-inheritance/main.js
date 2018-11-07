/*
import {Movie} from "./movie.js";
import Actor from "./actor.js";
import EventEmitter from "./eventemitter.js";
import Logger from "./logger.js";
*/

class EventEmitter{

    constructor(){
        this.events = {}
    }

    on(eventName, callback){
         if (this.events[eventName]){
            this.events[eventName].push(callback)
        }else{
            this.events[eventName] = [callback]
        }
    }
    emit(eventName){
        if(this.events[eventName]){
            this.events[eventName].forEach(callback => {
                callback(eventName)
            })
        }
    }   
    off(eventName){
        if (this.events[eventName]){
            delete this.events[eventName]    
        }
    }
}
class Movie extends EventEmitter{
    
    constructor(name,year,duration){
        super();
        this.name = name;
        this.year = year;
        this.duration = duration;
        this.cast = {};
    }
    play(){
        this.emit("play");
    }
    pause(){
        this.emit("pause");  
    }
    resume(){
        this.emit("pause");
    }
    addCast(cast){
        console.log(cast);
        this.cast = cast;
    }
}
class Actor {
    //methods
    constructor(name,age){
        this.name=name;
        this.age=age;
    
    }
}
class Logger{
    constructor(){
    }
    log(info){
        console.log("the "+info+" event has been emitted");

    }
}
let social = {
    share: function(friendName){
        console.log("Share "+this.name+" with "+friendName);
    }, 
    like: function(friendName){
        console.log(friendName+" like "+this.name);
    },
};


let avengers = new Movie("avengers I",2012,183);
let robert = new Actor("robert downey jr",53);
let logger = new Logger();
let moreActors = {
    chris:new Actor('chris evans',37),
    scarlett:new Actor('scarlett johansson', 33),
}

//examples
avengers.addCast(moreActors);
avengers.addCast(robert);
avengers.on('play',logger.log);
avengers.off('play');
avengers.play();
console.log(avengers.actors);
let iroman = new Movie('ironman',2008,126);
console.log(iroman);
Object.assign(iroman,social);
iroman.share('lucas saldias');
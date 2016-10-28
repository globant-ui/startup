import {EventEmitter} from './EventEmitter';
import {Actor} from './Actors';
import {classMovie} from './ClassMovie';
import {logger} from './Logger';

let Social = {
  likes: function(friendName)
    {
      console.log(`${friendName} likes ${this.title}`)
    },
  shares: function(friendName)
    {
      console.log(`${friendName} shares ${this.title}`)
    }
};
let mylogger = new logger;
let Movie1 = new classMovie("Lord of the Rings I", "1996", "220");
let Movie2 = new classMovie("Lord of the Rings II", "1997", "320");
let Movie3 = new classMovie("Lord of the Rings III", "1998", "300");
let Actor1 = new Actor("Leonardo Di Caprio", 40);
let newCast = [
  Actor2 = new Actor("Arnold", 60),
  Actor3 = new Actor("John", 39),
  Actor4 = new Actor("Ricardo Darín", 46)
];
Object.assign(Movie1, Social);
Object.assign(Movie2, Social);
Object.assign(Movie3, Social);
Movie1.on('play', mylogger.log);
Movie1.play();
Movie1.on('resume', mylogger.log);
Movie1.resume();
Movie1.off('play');
Movie1.play();
Movie1.likes('Mike Tyson');
Movie2.shares('Arnold');
Movie1.addCast(Actor1);
Movie1.addCast(newCast);
console.log(Movie1.cast[0]);
console.log(Movie1.cast[1]);
console.log(Movie1.cast[2]);
console.log(Movie1.cast[3]);

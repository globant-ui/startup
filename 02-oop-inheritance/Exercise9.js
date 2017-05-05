import * as Actor from 'modules/actor';
import * as EventEmitter from 'modules/emitter';
import * as Logger from 'modules/logger';
import * as Movie from 'modules/movie';

let Social = {
 share: function(friendName){
 console.log("share", this.title, "with", friendName);
 },
 like: function(friendName){
 console.log(friendName, "likes", this.title);
 }
 }
 let terminator = new Movie("terminator", 1992, 125);
 let thor2 = new Movie("thor 2", 2013, 124);
 let gotham = new Movie("gotham", 2013, 300);
terminator.on('play', function() {terminator.play});
terminator.on('play', function() {console.log("funciona")});
terminator.on('play', function() {console.log("funciona x 2")});

 let actors = [
 new Actor('Falso', 'Falso', 'Porahi, USA'),
 new Actor('Fernet', 'Branca', 'Cordoba, ARG'),
 new Actor('Martini', 'Dry', 'Buenos Aires, ARG')
 ];

 console.log(terminator);
terminator.addCast(actors);
 console.log(terminator);
import Movie from 'movie.js';
import Actor from 'actor.js';
import Logger from 'logger.js';

window.onload = function() {

  let terminator = new Movie('Terminator', 1984, 90);
  let logger = new Logger();
  terminator.on('play', logger.log);
  terminator.on('pause', logger.log);
  terminator.play();
  terminator.pause();
//  terminator.off('play');
//  terminator.play(); This will throw an error because there is no listener for it.

  //Exercise 6.

  let movie = Object.assign(terminator, social);
  console.log(movie);
  movie.share("Globant");
  movie.like("DOOM");

  //Exercise 8.

  let terminator_II = new Movie('Terminator_II', 1985, 60);
  let arnold = new Actor('Arnold Schwarzenegger', 50);
  let otherCast = [
  new Actor('Paul Winfield', 50),
  new Actor('Michael Biehn', 50),
  new Actor('Linda Hamilton', 50)
  ];

  terminator_II.addCast(arnold);
  terminator_II.addCast(otherCast);
  console.log(terminator_II);

}


/*Exercise 6*/

let social = {
  share: function(friendName) {
    console.log(`Share ${this.name} with ${friendName}`);
  },
  like: function(friendName) {
    console.log(`${friendName} likes ${this.name}`);
  }
}

/*Exercise 7 - 8 */


'use strict';

import _ from 'lodash';

var _movie = require('movie.js');

var _movie2 = _interopRequireDefault(_movie);

var _actor = require('actor.js');

var _actor2 = _interopRequireDefault(_actor);

var _logger = require('logger.js');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {

  var terminator = new _movie2.default('Terminator', 1984, 90);
  var logger = new _logger2.default();
  terminator.on('play', logger.log);
  terminator.on('pause', logger.log);
  terminator.play();
  terminator.pause();
  //  terminator.off('play');
  //  terminator.play(); This will throw an error because there is no listener for it.

  //Exercise 6.

  var movie = Object.assign(terminator, social);
  console.log(movie);
  movie.share("Globant");
  movie.like("DOOM");

  //Exercise 8.

  var terminator_II = new _movie2.default('Terminator_II', 1985, 60);
  var arnold = new _actor2.default('Arnold Schwarzenegger', 50);
  var otherCast = [new _actor2.default('Paul Winfield', 50), new _actor2.default('Michael Biehn', 50), new _actor2.default('Linda Hamilton', 50)];

  terminator_II.addCast(arnold);
  terminator_II.addCast(otherCast);
  console.log(terminator_II);
};

/*Exercise 6*/

var social = {
  share: function share(friendName) {
    console.log('Share ' + this.name + ' with ' + friendName);
  },
  like: function like(friendName) {
    console.log(friendName + ' likes ' + this.name);
  }

  /*Exercise 7 - 8 */

};

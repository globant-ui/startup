'use strict';

var _actors = require('./modules/actors.js');

var Actor = _interopRequireWildcard(_actors);

var _event_emitter = require('./modules/event_emitter');

var EventEmitter = _interopRequireWildcard(_event_emitter);

var _logger = require('./modules/logger');

var Logger = _interopRequireWildcard(_logger);

var _movie = require('./modules/movie');

var Movie = _interopRequireWildcard(_movie);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Social = {
  share: function share(friendName) {
    console.log("share", this.title, "with", friendName);
  },
  like: function like(friendName) {
    console.log(friendName, "likes", this.title);
  }
};

var logger = new Logger.Logger();
var gladiator = new Movie.Movie("gladiator", 1998, 120);
var fightclub = new Movie.Movie("fight club", 1998, 120);
var grandhotel = new Movie.Movie("grand hotel budapest", 2015, 130);

fightclub.on('play', logger.log);
fightclub.play();

var cast = [new Actor.Actor('Brad', 'Pitt', 'Shawnee, US'), new Actor.Actor('Edward', 'Norton', 'Boston, US'), new Actor.Actor('Helena', 'Bonham Carter', 'Islington, UK')];

fightclub.addCast(cast);
Object.assign(fightclub, Social);
fightclub.share("Agustin");

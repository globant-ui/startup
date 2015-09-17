var MovieObserver = (function () {
  var playing = function (name) {
        console.log(name + ' is playing...');
      },
      stopped = function (name) {
        console.log(name + ' is stopped...');
      };
  
  return {
    playing: playing,
    stopped: stopped
  };
})();

var Movie = function (name) {
  this.name = name;
    
};

Movie.prototype.play = function () {
  MovieObserver.playing(this.name);
};

Movie.prototype.stop = function () {
  MovieObserver.stopped(this.name);
};

Movie.prototype.set = function() {
    this.name = value;
    
};

Movie.prototype.get = function() {
    this.name = value;
};


var movie = new Movie('StarWars');
movie.play();


var movie = new Movie('Back to the future');
movie.stop();



	    




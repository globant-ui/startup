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

var DownloadableMovie = (function () {
  var downloadable = function (name) {
    console.log(name + ' is downloadable');
  },
  notdownloadable = function (name) {
    console.log(name + ' is not downloadable');
  };
  return{
    downloadable: downloadable,
    notdownloadable: notdownloadable
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

Movie.prototype.down = function () {
  DownloadableMovie.downloadable(this.name);
};

Movie.prototype.up = function () {
  DownloadableMovie.notdownloadable(this.name);
};


var social = {
  sharewith : function (user) {
    console.log(this.name + ' is sharing with ' + user);
  },
  
  likeit : function (user) {
    console.log(this.name + ' is liked for ' + user);
  }
};


$.extend(Movie.prototype, social);


var movie = new Movie('StarWars');
movie.play();
movie.down();
movie.sharewith('chino');
movie.likeit('chino');


var movie = new Movie('Back to the future');
movie.stop();
movie.up();



	    




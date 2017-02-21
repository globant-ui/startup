
var director = require('./director.js');


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


var Movie = function Movie () {
  this.attributes = {
    title : '',
    year : '',
    director : {}
  };
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

Movie.prototype.cast = function (actors){
    this.actors = actors;
    console.log(actors + ' acting on ' + this.name);
}


var social = {
  sharewith : function (user) {
    console.log(this.name + ' is sharing with ' + user);
  },
  
  likeit : function (user) {
    console.log(this.name + ' is liked for ' + user);
  }
};


$.extend(Movie.prototype, social);

module.exports = Movie;
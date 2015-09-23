//------------------------------- Imported    Modules//
var Director = require('./Director.js').Director;
//-------------------------------------------------//


var MovieObserver = function ( ) {};
MovieObserver.prototype.playing = function (title) {
    console.log('A movie with title ' + title + ' has been played');
};
MovieObserver.prototype.stopped = function(title) {
    console.log('A movie with title ' + title + ' stopped');
};


var Movie = function (optParams) {
  this.title = optParams.title;
  this.duration = optParams.duration; 
  this.director = new Director();
  this.observer = new MovieObserver();
};

Movie.prototype = {
  constructor : Movie,
  setDirectorName : function (directorName) {
    this.director.setName(directorName);
  },
  getDirectorName : function () {
    this.director.getCompleteName();
  },

  getTitle : function () {
    console.log('Movie title ...:' + this.title);
  }, 

  setTitle :function (title) {
    this.title = title;
      
  },
  getDuration : function () {
    console.log(this.duration);
  }, 

  setDuration :function (argDuration) {
    this.duration = argDuration ;
  },
  getDirector : function () {
    console.log(this.director);
  }, 
  setDirector :function (argDirector) {
    this.director = argDirector ;
  },
  play :function () {
    console.log('This is Movie.play method: I am a movie. This is my title: ' + this.title);
    this.observer.playing(this.title);
  },

  stop :function () {
    this.observer.stopped(this.title);
  }
};

var movie = new Movie({title:'Godzila'});
movie.setDirectorName('John Rambo');
movie.getDirectorName();
movie.getTitle();
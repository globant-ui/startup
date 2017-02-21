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
  this.director = optParams.director;
  this.observer = new MovieObserver();
};

Movie.prototype = {
  constructor : Movie,

  getTitle : function () {
     console.log(this.title);
  }, 

  setTitle :function (argTitle) {
    this.title = argTitle;
      
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

var DownloableMovie  = function (optParams) {
  Movie.call(this, optParams);
};

var inheritPrototype = function (paramParentObject, paramChildObject ) {
  var copyOfParent = Object.create(paramParentObject.prototype);
  copyOfParent.constructor = paramChildObject;
  paramChildObject.prototype = copyOfParent;
};



inheritPrototype(Movie,DownloableMovie);

/**
*Augment existing 'class' with a method from another.
*This function is courtesy of Addy Osmani
* From the book JavaScript Design Patterns
*/
var augment = function (receivingClass, givingClass) {
  // only provide certain methods
  if ( arguments[2] ) {
    for (var i=2, len=arguments.length; i<len; i++) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
    }
  }
  // provide all methods
  else {
    for ( var methodName in givingClass.prototype ) {
      /* check to make sure the receiving class doesn't
      have a method of the same name as the one currently
      being processed */
      if (!receivingClass.prototype[methodName]) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName];
      }
    }
  }
};

//Mixin Object() 
var Social = function() {};
Social.prototype = {
    share: function (friendName){
      return 'Sharing : ' + this.attributes.title + ' with ' + friendName; 
    },
    like: function(){
    }
};

//use of Mixin function
augment(Movie, Social);

var movie = new Movie({title:'Pirates of the Sillicon Valley'});
var downloableMovie = new  DownloableMovie({title:'Online: Batman of the Future', director:'Christopher Nolan' });

movie;
downloableMovie;
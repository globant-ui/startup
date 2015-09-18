/***************************************/
// Function that will run on DOM Ready, it will generate some examples
function onDOMReady()
{
	// Instanciate a new Movie Object
	var terminator = new Movie();

  // Set Movie Title and Director
	terminator.Set('title', 'Terminator');
	terminator.Set('director', 'James Cameron');

  //Play and Share (with Me :D )
  terminator.Play();
  terminator.Share('Nahuel A. Veron');

  // Generate Actors
  var arnold = new Actor('Arnold Schwarzenegger', '68');

  // Put Actor in Movie
  terminator.PushActor(arnold);

  // Show data from the actor
  console.log('The Main Actor is ' + terminator.GetActor(0).GetName() + ' and he has ' +
  terminator.GetActor(0).GetAge() + ' years.');

	// Stop Movie
  terminator.Stop();
}

/***************************************/
// MovieObserver will listens for 'playing' and 'stopped',
// For having only ONE Observer, i will use Pub/Sub with Singleton

var MovieObserver = (function()
{
  // Will Hold the Singleton Instance
  var instance;

  function generateInstance()
  {
    // MovieObserver Constructor
    function MovieObserver()
    {
			// Array where all the subscribers will be saved
	    var subscribers = [];

	    // Publish Method, handle a triggered event
	    this.Publish = function(event, movieName)
	    {
		    // Notify all subscribers
		    for (var i in subscribers)
		    {
				    subscribers[i].Notify(event, movieName);
		    }
	    };

	    // Add an Object that will be notified when
	    // a event is triggered.
	    this.Subscribe = function(subscriber)
	    {
		    // Add a Subscriber on list of subscribers
		    subscribers.push(subscriber);
	    };
    }

	  return new MovieObserver();
    }

  // Will Return actual instance or generate a new if doesn't exist.
  return {
	  getInstance: function()
    {
      if (!instance) { instance = generateInstance(); }
      return instance;
    }
  };
})();

/***************************************/

// Movie Module
var Movie = (function()
{
	// Movie Constructor
  function Movie()
  {
	  // Initialize Hashmap Elements
	  var hashMap = {};
	  hashMap.actors = [];

	  // Triggers for Playing and Stopped Events
		this.Play = function()
		{
			MovieObserver.getInstance().Publish('playing', hashMap.title);
		};

	  this.Stop = function ()
	  {
		  MovieObserver.getInstance().Publish('stopped', hashMap.title);
	  };

	  // Used By MovieObserver to Notify an Incoming Event
	  this.Notify = function(event, movieName)
	  {
		  // Check if event is for started
		  if (event === 'playing' && movieName === hashMap.title)
		  {
			  // Check if property is initialized
			  if (typeof hashMap.title !== 'undefined')
			  {
				  console.log('Playing ' + hashMap.title + '...');
			  }
			  else
			  {
				  console.log('The Movie is Playing');
			  }
		  }

		  // Check if event is for stopped
		  else if (event === 'stopped' && movieName === hashMap.title)
		  {
			  if (typeof hashMap.title !== 'undefined')
			  {
				  console.log('Stopped ' + hashMap.title);
			  }
			  else
			  {
				  console.log('The Movie has stopped');
			  }
		  }
	  };

		// Getters and Setters
	  this.Get = function (indexKey)
	  {
		  // Check if property is initialized
		  if (typeof hashMap[indexKey] !== 'undefined')
		  {
			  return hashMap[indexKey];
		  }
	  };

	  this.Set = function (indexKey, value)
	  {
		  hashMap[indexKey] = value;
	  };

	  this.GetActor = function()
	  {
		  // Can accept a.
		  if (arguments.length > 0)
		  {
			  return hashMap.actors[arguments[0]];
		  }
			else
		  {
			  return hashMap.actors;
		  }
	  };

		this.PushActor = function(actor)
		{
			if (actor instanceof(Actor))
			{
				hashMap.actors.push(actor);
			}
		};

	  // Extend from Social Mixin
    Extend (Movie,Social);

	  // Subscribe to MovieObserver
    MovieObserver.getInstance().Subscribe(this);

  }

  // It Will Return Movie Constructor!
  return Movie;
})();

/***************************************/
// DownloadableMovie Module
var DownloadableMovie = (function()
{

	// DownloadableMovie constructor, it will call
	// parent constructor using a technique called "constructor stealing"
  function DownloadableMovie()
  {
    // We then apply the 'Parent' constructor logic to 'this', by calling the 'Parent' function
    // using 'apply', which allow us to specify the object that 'this' should reference
    // during the function execution.
    Movie.apply(this);

	  // Add GetDownload
	  this.GetDownload = function()
	  {
		  // Check if title exist
		  if (typeof hashMap.title !== 'undefined')
		  {
			  console.log('Downloading ' + hashMap.title);
		  }
	  };
  }

  // DownloadableMovie inherits from Movie
  DownloadableMovie.prototype = Object.create(Movie.prototype);

  // Return Constructor
  return DownloadableMovie;
})();

/***************************************/
// A Mixin for Social
// Empty Constructor, it will only use Methods
var Social = function() {};
// Methods for Mixin defined in his prototype
Social.prototype =
{
	Share: function(friendName)
  {
    console.log('Sharing ' + this.Get('title') + ' with ' + friendName);
  },
  Like: function()
  {
    console.log('I like ' + this.Get('title') + '!' );
  }
};

/***************************************/
// Extend for mix a mixing into a Object
function Extend(rcv, giv)
{
	// Fore Each Method in Giv Prototype
  for (var method in giv.prototype)
  {
    // We don't want to overwrite a method
    if (!rcv.hasOwnProperty (method))
    {
      rcv.prototype[method] = giv.prototype[method];
    }
  }
}

/***************************************/
// Actor Module
var Actor = (function()
{
	// Actor Constructor
  function Actor()
  {
	  // Initialize Private Fields
	  var name = '', age = '';

    // Constructor Overload for 2 Arguments
    if (arguments.length === 2)
    {
      name= arguments[0];
      age = arguments[1];
    }

	  // Getter and Setter
	  this.GetName = function() { return name; };
	  this.GetAge  = function() { return age; };
  }
	return Actor;
})();
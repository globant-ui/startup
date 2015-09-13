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
            this.subscribers = [];
        }

        // MovieObserver Prototype
        MovieObserver.prototype = {
            publish: function(event)
            {
                // Will send a notify to all subscribed

                for (var i in this.subscribers)
                {
                    // Notify all subscribers
                    this.subscribers[i].notify(event);
                }
            },
            subscribe: function(subscriber)
            {
                // Add a Subscriber on list of subscribers
                this.subscribers.push(subscriber);
            }
        };

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
// Movie Prototype and Constructor,
// OLD! Replaced by Module Bellow

// // Movie Constructor
// function Movie()
// {
//    this.hashmap = {};
// }
// // Movie Prototype
// Movie.prototype =
// {
//     /* Object Methods */
//     play: function() { },
//     stop: function() { },
//
//     /* Getter and Setter */
//     get: function(indexKey)
//     {
//         return this.hashmap[indexKey];
//     },
//     set: function(indexKey, value)
//     {
//         this.hashmap[indexKey] = value;
//     }
// };
/***************************************/
// Movie Module
var Movie = (function()
{

    // Movie Constructor
    function Movie()
    {
        Extend (Movie,Social);
        MovieObserver.getInstance().subscribe(this);
        this.hashmap = {};
        this.hashmap.actors = [];
    }

    // Movie Prototype
    Movie.prototype =
    {
        /* Object Methods */
        play: function () { MovieObserver.getInstance().publish('playing'); },
        stop: function () { MovieObserver.getInstance().publish('stopped'); },

        /* Event that runs when a notify is incoming */
        notify: function(event) {
            // Check if event is for started
            if (event == 'playing')
            {
                if (typeof this.hashmap['title'] !== 'undefined')
                {
                    console.log('Playing ' + this.hashmap['title'] + '...');
                }
                else console.log('The Movie is Playing');
            }
            // Check if event is for stopped
            else if (event == 'stopped')
            {
                if (typeof this.hashmap['title'] !== 'undefined')
                {
                    console.log('Stopped ' + this.hashmap['title']);
                }
                else console.log('The Movie has stopped');
            }
        },
        /* Getter and Setter */
        get: function (indexKey)
        {
            if (typeof this.hashmap[indexKey] !== 'undefined') {
                return this.hashmap[indexKey];
            }
            else return undefined;
        },
        set: function(indexKey, value)
        {
            this.hashmap[indexKey] = value;
        },
        /* Actor is a Jagged Array into HashMap */
        pushActor: function(actor)
        {
            if (actor instanceof(Actor))
            {
                this.hashmap.actors.push(actor);
            }
        },

        getActors: function()
        {
            return this.hashmap.actors;
        }
    };

    // It Will Return Movie Constructor!
    return Movie;

})();

/***************************************/
// DownloadableMovie Module
var DownloadableMovie = (function()
{
    //DownloadableMovie constructor, it will call
    //parent constructor using a technique called "constructor stealing"
    function DownloadableMovie()
    {
        //We then apply the 'Parent' constructor logic to 'this', by calling the 'Parent' function
        //using 'apply', which allow us to specify the object that 'this' should reference
        //during the function execution.
        Movie.apply(this);
    }

    // DownloadableMovie inherits from Movie
    DownloadableMovie.prototype = Object.create(Movie.prototype);
    // Add GetDownload
    DownloadableMovie.prototype.getDownload = function()
    {
        // Check if title exist
        if (typeof this.hashmap.title !== 'undefined')
        {
            console.log('Downloading ' + this.hashmap.title);
        }
    };

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
    share: function(friendName)
    {
        console.log('Sharing ' + this.hashmap.title + ' with ' + friendName);
    },
    like: function()
    {
        console.log('I like ' + this.hashmap.title );
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
        // Constructor Overload for 2 Arguments
        if (arguments.length == 2)
        {
            this.Name= arguments[0];
            this.Age = arguments[1];
        }
        // Default Constructor w/o Arguments
        else
        {
            this.Name= '';
            this.Age = '';
        }
    }


    // Actor Prototype
    Actor.prototype =
    {
        getName : function() { return this.Name },
        getAge  : function() { return this.Age }
    };
    return Actor;
})();
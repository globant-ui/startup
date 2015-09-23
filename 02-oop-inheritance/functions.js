//OLD
/*function Movie(){
	this.hashmap= {};
}

Movie.prototype = 
{
	set: function(key,value){
		return this.hashmap[key]=value;
	}
	get: function(key){
		return this.hashmap[key];
	},
	play: function(){},

	stop: function(){},
};
*/

//MOVIEOBSERVER
//pub/sub
var MovieObserver=(function()
{
	function MovieObserver(){
	this.subscribers=[];	/* It should be private */
	}

MovieObserver.prototype=
{
	subscribe: function(subscriber)
	{
		this.subscribers.push(subscriber); /* You subscribe to a Topic. That is not present here. */
	},
	publish: function(event,title)
	{
		var i=0;
		while (i<this.subscribers.length)
		{			
			if (this.subscribers[i].hashmap['title'] == title) /* Why this validation? If I want to publish another attr? */
				this.subscribers[i].notify(event); /* Notify is more related to an Observer pattern */
			i++;
		}
	},
	};
return new MovieObserver(); /* Why this return an instance? */
})();


//MODULE MOVIE
var Movie= (function()
{
	//Constructor
	function Movie()
	{
		this.hashmap= {};				/* This is not private */
		this.hashmap.actors= [];		/* This is not private and why don't use set('actors', ['a', 'b']) */
		MovieObserver.subscribe(this);
		addMixin(Movie,Social);
	}

	Movie.prototype=
	{
		play: function()
		{
			MovieObserver.publish('playing',this.hashmap['title']);
		},

		stop: function()
		{
			MovieObserver.publish('stopped',this.hashmap['title']);
		},

		notify: function(event){	/* Notify is more related to an Observer pattern and could receive what it should log. */
			if (event=='playing')
			{
				console.log('Playing '+ this.hashmap['title']);
			}
			else if (event=='stopped'){
				console.log('Stopped '+this.hashmap['title']);	
			}
		},

		get: function(key)
        {
            return this.hashmap[key];
        },
        set: function(key, value)
        {
            this.hashmap[key] = value;
        },

        push_actor: function(actor)
        {
        	this.hashmap.actors.push(actor); /* Why don't use set method? */
        },

        get_actors: function()
        {
        	var aux=[];
        	for(var i in this.hashmap.actors){
        		aux[i]=this.hashmap.actors[i].getName()+' '+this.hashmap.actors[i].getLastName();
        	}
        	return aux;
        }
	};
return Movie;
})();

//DOWNLOADABLEMOVIE
var DownloadableMovie= (function()
{
	function DownloadableMovie()
	{
		Movie.apply(this);
	}

	DownloadableMovie.prototype=Object.create(Movie.prototype);
	DownloadableMovie.prototype.getDownload = function()
	{
		console.log('Downloading '+this.get('title'));
	};
	
return DownloadableMovie;
})();

//MIXIN SOCIAL
var Social= function(){};
Social.prototype=
{
	share: function(friendName)
	{
		console.log('Sharing '+ this.get('title')+' with '+ friendName);
	},
	like: function()
	{
		console.log('You like '+this.get('title')+'!');
	}
};

function addMixin (target,mixin) {
	for (var prop in mixin.prototype) 
		if (!target.hasOwnProperty(prop)) 
			target.prototype[prop] = mixin.prototype[prop];
}

//ACTOR CLASS
var Actor= function(name,lastname){
	this.name=name;
	this.lastname=lastname;
}

Actor.prototype={
	getName: function(){
		return this.name;
	},
	getLastName: function(){
		return this.lastname;
	}
};

//EXAMPLES
var m1 = new Movie();
var m2 = new Movie();
var m3 = new DownloadableMovie();
m1.set('title','Terminator');
m2.set('title','Robocop');
m3.set('title','Alice in Wonderland');

m1.play();
m1.share("Yamila Aramendia");
m1.like();
var act1= new Actor("Arnold","Schwarzenegger");
var act2= new Actor("Linda","Hamilton");
m1.push_actor(act1);
m1.push_actor(act2);
console.log('The movie '+ m1.get('title') + ' / Actors : ' + m1.get_actors());
m1.stop();

m2.play();
m2.stop();
m3.getDownload();
//MODULE MOVIE
var Movie= (function()
{
	//Constructor
	function Movie()
	{
		this.hashmap= {};
		this.hashmap.actors= [];
		this.hashmap.directors=[];
	}

	Movie.prototype=
	{
		get: function(key)
        {
            return this.hashmap[key];
        },
        set: function(key, value)
        {
            this.hashmap[key] = value;
        },

        push_director : function(director)
        {
        	this.hashmap.directors.push(director);
        },

        getDirector: function()
        {
        	return this.hashmap.directors;
        }
	};
return Movie;
})();

module.exports = Movie;
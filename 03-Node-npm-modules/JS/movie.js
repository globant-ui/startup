//MODULE MOVIE
var Movie= (function()
{
	//Constructor
	function Movie()
	{
		this.hashmap= {};             /* This should be private. */
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

        push_director : function(director) /* Why don't you use it? Remove it if you don't ues. */
        {
        	this.hashmap.directors.push(director);
        },

        getDirector: function() /* Why don't you use it? Remove it if you don't ues. */
        {
        	return this.hashmap.directors;
        }
	};
return Movie;
})();

module.exports = Movie;
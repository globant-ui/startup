require('./movie.js');
var Director= (function ()
{
	function Director() /* Constructor is not handling arguments. What about the director name? */
	{
		this.hashmap={};		/* This should be private. */
		this.hashmap.quotes=[];
	}

	Director.prototype =
	{
		set: function(key,value){
			this.hashmap[key]=value;
		},
		get: function(key){
			return this.hashmap[key];
		},

		speak: function(i){
			return this.hashmap.quotes[i];
		},
	};
	return Director;
})();

module.exports = Director;
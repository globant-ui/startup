// Require Movie Module
require('./movie.js');
// Director Module
var Director = (function ()
{
  // Director Constructor
  function Director()
  {
    this.hashmap = [];
    this.hashmap.quotes = [];
    if (arguments.length === 1)
    {
      this.hashmap.name = arguments[0];
    }
  }

  // Director Prototype
  Director.prototype =
  {
    /* Getter and Setter for HashMap */
    get  : function (index)
    {
      return this.hashmap[index];
    },
    set  : function (index, value)
    {
      this.hashmap[index] = value;
    },
    speak: function ()
    {
      // Return a Random Quote from the Director
      var rand = Math.floor(Math.random() * ( 1 + (this.hashmap.quotes.length - 1) ));
      return this.hashmap.quotes[rand];
    }
  };

  return Director;
})();

module.exports = Director;
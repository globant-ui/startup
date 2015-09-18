// Movie Module
var Movie = (function ()
{
  // Movie Constructor
  function Movie()
  {
    this.hashmap = {};
    this.hashmap.actors = [];
  }

  // Movie Prototype
  Movie.prototype =
  {
    /* Getter and Setter */
    get: function (indexKey)
    {
      if (typeof this.hashmap[indexKey] !== 'undefined')
      {
        return this.hashmap[indexKey];
      }

      else
      {
        return undefined;
      }
    },

    set: function (indexKey, value)
    {
      this.hashmap[indexKey] = value;
    },

    /* Actor is a Jagged Array into HashMap */
    pushActor: function (actor)
    {
      if (actor instanceof(Actor))
      {
        this.hashmap.actors.push(actor);
      }
    },

    getActors: function ()
    {
      return this.hashmap.actors;
    },

    /* Director is a Jagged Array into HashMap */
    getDirectors: function ()
    {
      return this.hashmap.directors;
    },

    pushDirector: function (director)
    {
      if (director instanceof(Director))
      {
        this.hashmap.actors.push(Director);
      }
    }

  };


  return Movie;
})();

module.exports = Movie;
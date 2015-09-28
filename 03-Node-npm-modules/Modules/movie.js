// Movie Module
var Movie = (function ()
{
  // Movie Constructor
  function Movie()
  {
    this.hashmap = {};  /* This should be private. */
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
    pushActor: function (actor) /* If it is not used, yuo should remove it. */
    {
      if (actor instanceof(Actor))
      {
        this.hashmap.actors.push(actor);
      }
    },

    getActors: function () /* If it is not used, yuo should remove it. */
    {
      return this.hashmap.actors;
    },

    /* Director is a Jagged Array into HashMap */
    getDirectors: function () /* If it is not used, yuo should remove it. */
    {
      return this.hashmap.directors;
    },

    pushDirector: function (director) /* If it is not used, yuo should remove it. */
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
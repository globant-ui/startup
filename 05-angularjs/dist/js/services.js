'use strict';
var app = angular.module('startupServices', ['ngStorage']);

// Service that manage Local Storage
app.service('LocalStorageService', ['$localStorage', function ($localStorage)
{
  // Load LocalStorage, if it can't, it will return a object with an empty property
  // called 'movies'.
  var data = $localStorage.$default({movies: []});
  // Return the full array with all movies.
  this.ReadAllMovies = function ()
  {
    return data.movies;
  };
  // C.R.U.D. Methods:

  // Create a movie into the array
  this.CreateMovie = function (movie)
  {
    data.movies.push(movie);
  };
  // Read a movie (by index) from the array
  this.ReadMovie = function (index)
  {
    return data.movies[index];
  };
  // Update a movie (by index) from the array
  this.UpdateMovie = function (index, movie)
  {
    data.movies[index] = movie;
  };
  // Delete a Movie (by index) from the array
  this.DeleteMovie = function (index)
  {
    data.movies.splice(index, 1);
  };
}]);

// Service that generates a empty (or with data )
app.service('MovieGeneratorService', function ()
{
  // Generate an empty movie object
  this.GenerateEmpty = function ()
  {
    return {
      title : '',
      year  : '',
      genre : '',
      desc  : '',
      imgUrl: 'http://img2.wikia.nocookie.net/__cb20130819212538/dragon-stones/images/f/fc/256x256.gif'
    };
  };
  // Generate a new movie object from an existent movie
  this.GenerateFromMovie = function (movie)
  {
    return {
      title : movie.title,
      year  : movie.year,
      genre : movie.genre,
      desc  : movie.desc,
      imgUrl: movie.imgUrl
    };
  };
});
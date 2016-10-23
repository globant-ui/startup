var movies = require('../../json/movies.json');
var utils = require('./utils');

module.exports = {
	listMovies: function() {
		return movies;
	},
	getMovie: function(id) {
		var movie = movies.filter(function(movie) {
			return movie.id == id;
		}).pop();

		return movie;
	},
	addMovie: function(newMovie) {
		var newId = movies.length+1;
		newMovie.id = newId;
		movies.push(newMovie);
		return newId;
	},
	listGenres: function() {
		var genres = [];
		movies.forEach(function(movie) {
			genres = genres.concat(movie.genre.split(', '));
		});
		genres = genres.filter(utils.distinct);
		return genres;
	}
};
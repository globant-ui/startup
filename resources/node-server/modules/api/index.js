var express = require('express');
var api = express.Router();
var moviesController = require('./moviesController');
var genresController = require('./genresController');

api.get('/movies', moviesController.listMovies);
api.get('/movies/:id(\\d+)/', moviesController.getMovie);
api.post('/movies', moviesController.createMovie);

api.get('/genres', genresController.listGenres);

module.exports = api;
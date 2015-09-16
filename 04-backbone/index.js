var $ = require('jquery');
var Handlebars = require('handlebars');

var Genres = require('./Modules/EnumGenres');
var MovieModel = require('./Modules/MovieModel');

var Movie = new MovieModel();
Movie.setDesc('DDDFF');
Movie.setGenre(Genres.Action);
Movie.setTitle('TITLE');
Movie.setYear('1999');
Movie.setImgUrl('https://placeholdit.imgix.net/~text?txtsize=24&txt=256%C3%97256&w=256&h=256');
var scriptID = $('#movieData').html();
var template = Handlebars.compile(scriptID);

$(document).ready(function()
{
    $(document.body).html(template(Movie));
});
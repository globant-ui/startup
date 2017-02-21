var Movie = require('./movies.js');
var Director = require('./director.js');
var $ = require('./jquery-2.1.4.js');

var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes',['Cast is everything. ', 'Do what...']);
alien.set('director',ridleyScott);

$(document).ready(function(){
  $article = $('.director-quotes');
  $quotes = alien.get('director').get('quotes').join('<br>');
  $article.html($quotes);
});

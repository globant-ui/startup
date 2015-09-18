var $ = require('jquery');
var Director = require('./Modules/director.js');
var Movie = require('./Modules/movie.js');
/**************************************/
// Api Test, on DOM Ready
$(document).ready(function ()
{
  // Create Movie
  var alien = new Movie();
  // Set Title
  alien.set('title', 'Alien');

  // Create Director
  var ridleyScott = new Director('Ridley Scott');
  ridleyScott.set('quotes', ['You still don\'t understand what you\'re' +
  ' dealing with, do you? Perfect organism. Its structural perfection ' +
  'is matched only by its hostility', 'I admire its purity. A survivor... ' +
  'unclouded by conscience, remorse, or delusions of morality.',
    'Life isn\'t black and white, it\'s a million gray areas, don\'t you find?',
    'How can you look at the galaxy and not feel insignificant? ']);

  // Set director to Movie
  alien.set('director', ridleyScott);

  // Modify UI
  $('#director').text(alien.get('director').get('name'));
  $('#movie').text(alien.get('title'));

  // Onclick Event
  $('#getRandom').click(function ()
  {
    // Assign Random Quote on Text
    $('#randomQuote').text(alien.get('director').speak());

    // Quickly Fade and disable button
    $('#targetSection').fadeIn(600, function ()
    {
      $('#getRandom').prop('disabled', true);
      // Fade out and enable button
      $('#targetSection').fadeOut(4000, function ()
      {
        $('#getRandom').prop('disabled', false);
      });
    });
  });
});

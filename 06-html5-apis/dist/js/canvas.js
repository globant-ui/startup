'use strict';

var RandomColorCanvas = require('./modules/canvas/RandomColorCanvas');
var AnimatedCanvas = require('./modules/canvas/AnimatedCanvas');

// Will Run on DOM Ready
(function ()
{
  RandomColorCanvas(document.getElementById('randomColor'));
  AnimatedCanvas(document.getElementById('animatedCanvas'));
})();
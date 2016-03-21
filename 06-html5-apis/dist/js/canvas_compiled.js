(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var RandomColorCanvas = require('./modules/canvas/RandomColorCanvas');
var AnimatedCanvas = require('./modules/canvas/AnimatedCanvas');

// Will Run on DOM Ready
(function ()
{
  RandomColorCanvas(document.getElementById('randomColor'));
  AnimatedCanvas(document.getElementById('animatedCanvas'));
})();
},{"./modules/canvas/AnimatedCanvas":3,"./modules/canvas/RandomColorCanvas":4}],2:[function(require,module,exports){
'use strict';

var RandomColorModule = (function()
{
  function RandomColorModule() { }

  RandomColorModule.prototype = {
    //nextSingleColor will return an number between 0 and 255
    nextSingleColor : function()
    {
      var rand = Math.random() * (255);
      rand = Math.floor(rand);
      return Number(rand);
    },

    // nextSingleAlpha will return a float between 0.0 and 1.0
    nextSingleAlpha: function()
    {
      return (Math.random() * (1.0)).toFixed(1);
    },

    //nextRGBColor will return a color like 'rgb(60,210,75)'
    nextRGBColor   : function()
    {
     return 'rgb(' + this.nextSingleColor() + ',' + this.nextSingleColor() +
       ',' + this.nextSingleColor() + ')';
    },

    //nextRGBAColor will return a color like 'rgba(60,210,75,0.3)'
    nextRGBAColor   : function()
    {
      return 'rgba(' + this.nextSingleColor() + ',' + this.nextSingleColor() +
        ',' + this.nextSingleColor() + ',' + this.nextSingleAlpha() + ')';
    }
  };

  return RandomColorModule;
}());

module.exports = RandomColorModule;
},{}],3:[function(require,module,exports){
'use strict';

var AnimatedCanvas = (function ()
{
  function AnimatedCanvas(canvas)
  {
    var context = canvas.getContext('2d');

    // Try to load Request Animation frame (or use setTimeout with callback if not available)
    var requestAnimationFrame =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          function(callback) {
            return setTimeout(callback, 16);
          };

    // Box object
    var Box = {
      'x'     : 50,
      'y'     : 50,
      'width' : 100,
      'height': 100,
      'fill'  : 'rgb(150,240,30)'
    };

    // Draw a Rectangle
    var Render = function()
    {
      // Clear Canvas before draw on it
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Start drawing box on canvas.
      context.beginPath();
      context.rect(Box.x, Box.y, Box.width, Box.height);
      context.fillStyle = Box.fill;
      context.fill();
      // Redraw
      requestAnimationFrame(Render);
    };

    // Start the redrawing process
    Render();

    // Animate function
    var Animate = function(prop, val, duration)
    {
      // Calculations to determine the progress of animation
      var start = new Date().getTime();
      var end = start + duration;
      var current = Box[prop];
      var distance = val - current;

      var Step = function()
      {
        // Get Current Progress
        var timestamp = new Date().getTime();
        var progress = Math.min((duration - (end - timestamp)) / duration, 1);

        // Update Box property
        Box[prop] = current + (distance * progress);

        // If the animation hasn't finished, repeat the step.
        if (progress < 1) requestAnimationFrame(Step);
      };
      // Start Animation
      return Step();
    };

    Animate('x', 0, canvas.width);

    // Generate the effect!
    setTimeout(function() {
      Animate('y', 0, 1000);

      setTimeout(function() {
        Animate('x', 50, 1000);
        Animate('y', 50, 1000);
      }, 1000);
    }, 1000);
  }

  return AnimatedCanvas;
}());

module.exports = AnimatedCanvas;
},{}],4:[function(require,module,exports){
'use strict';

var RandomColorModule = require('../RandomColorModule');

var RandomColorCanvas = (function(){

  function RandomColorCanvas(canvas)
  {
    // Random Color Module object
    var rcm = new RandomColorModule();
    var context = canvas.getContext('2d');

    // Draws a Rectangle
    context.beginPath();
    // Draw rectangle with random color
    context.rect(10,20,200,100);
    context.fillStyle = rcm.nextRGBColor();
    context.fill();
    // Draw Stroke for first rectangle
    context.lineWidth = 7;
    context.strokeStyle = rcm.nextRGBColor();
    context.stroke();

    // Draw Circle with random color
    // With a radius of 70,
    // because we use a full arc the angle start with 0 and
    // finish with 2 * PI.
    context.beginPath();
    context.arc(200, 100, 30, 0, (2 * Math.PI));
    context.fillStyle = rcm.nextRGBAColor();
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = rcm.nextRGBColor();
    context.stroke();
  }

  return RandomColorCanvas;
}());
module.exports = RandomColorCanvas;
},{"../RandomColorModule":2}]},{},[1]);

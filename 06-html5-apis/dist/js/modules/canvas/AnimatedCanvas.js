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
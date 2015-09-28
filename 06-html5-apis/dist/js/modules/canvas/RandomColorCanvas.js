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
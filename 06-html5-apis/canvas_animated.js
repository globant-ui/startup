window.requestAnimFrame = (function(callback) {
return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
function(callback) {
   window.setTimeout(callback, 1000 / 60);
};
})();

function drawRectangle(rect, context) {
        context.beginPath();
        context.rect(rect.x, rect.y, rect.width, rect.height);
        context.fillStyle = '#FF00BF';
        context.fill();
        context.stroke();
};

function animate(rect, canvas, context, startTime) {
        var time = (new Date()).getTime() - startTime;
        var linearSpeed = 100;
        var newX = linearSpeed * time / 1000; 

        if(newX < canvas.width - rect.width - rect.borderWidth / 2) {
          rect.x = newX;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawRectangle(rect, context);
        requestAnimFrame(function() {
          animate(rect, canvas, context, startTime);
        });
};
      
var canvas = document.getElementById('canvas_animated');
var context = canvas.getContext('2d');
  var rect = {
        x: 0,
        y: 75,
        width: 100,
        height: 50,
        borderWidth: 5
      };
      
      drawRectangle(rect, context);
      
      setTimeout(function() {
        var startTime = (new Date()).getTime();
        animate(rect, canvas, context, startTime);
}, 0);
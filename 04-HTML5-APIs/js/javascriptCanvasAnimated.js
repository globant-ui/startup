window.onload = function(){
  let x =  0;
  let y = 15;
  let speed = 5;

  function animate() {

      reqAnimFrame = window.mozRequestAnimationFrame    ||
                  window.webkitRequestAnimationFrame ||
                  window.msRequestAnimationFrame     ||
                  window.oRequestAnimationFrame
                  ;

      reqAnimFrame(animate);

      x += speed;

      if(x <= 0 || x >= 475){
          speed = -speed;
      }

      draw();
  }


  function draw() {
      let canvas  = document.getElementById("myCanvas");
      let context = canvas.getContext("2d");

      context.clearRect(0, 0,6500, 170);
      context.fillStyle = "#ff00ff";
      context.fillRect(x, y, 100, 50);
  }

  animate();
}

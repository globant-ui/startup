//Exercise Canvas Element
window.onload = function(){
  draw();
};
function draw() {
  let canvas = document.getElementById('canvas');
  console.log(document.getElementById('canvas'))
  if (canvas.getContext){
    let ctx = canvas.getContext('2d');

    for(let i=0;i<4;i++){
      for(let j=0;j<3;j++){
        ctx.beginPath();
        let x = 50+j*50; // x coordinate
        let y = 50+i*50; // y coordinate
        let radius = 20; // Arc radius
        let startAngle = 0; // Starting point on circle
        let endAngle = Math.PI+(Math.PI*j)/2; // End point on circle
        let anticlockwise = i%2==0 ? false : true; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i>1){
          ctx.fill();
          ctx.fillStyle = getRndColor();
        } else {
          ctx.stroke();
          ctx.strokeStyle=getRndColor();
        }
      }
    }
  }
}

function getRndColor() {
   var r = 255*Math.random()|0,
       g = 255*Math.random()|0,
       b = 255*Math.random()|0;
   return 'rgb(' + r + ',' + g + ',' + b + ')';
}

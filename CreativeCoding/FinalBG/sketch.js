#add gif to grid
let gif;

function preload('assets/GIF_Vizcarra.gif');

function setup() {
  createCanvas (windowWidth,windowHeight);
  fill (255, 243, 252);
  stroke(255, 184, 226)
  strokeWeight (1);

}

function draw() {
  var num = 9;
  var sideLen = windowWidth/num;
 
 
  for (var y=0; y < windowHeight; y = y+sideLen) {
    for (var x=0; x < windowWidth; x=x+sideLen){
      image(gif, x, y, sideLen, sideLen);
	}
}

 
}
function windowResize (){
  resizeCanvas (windowWidth, windowHeight);
}
let canvas;
let DIAMETER;
const SHIFT_VALUES = [1/4, 3/8];

function setup(){
  canvas = createCanvas(800, 800)
  canvas.parent('sketch-holder');
  p5.disableFriendlyErrors = true; 
  strokeWeight(3);
  noFill();
  noCursor();
 
  //Current challenge is to find good sizes CAN BE TWEAKED LATER
  resizeCanvas(windowWidth, windowHeight);
  if (windowWidth < windowHeight){
    DIAMETER = windowWidth/2;
  } else {
    DIAMETER = windowHeight/2;
  }
}
 
//Main loop 
function draw(){
  if (focused){
    background(230, 0, 128);
    //background(255);
    circle(mouseX, mouseY, 20);
    translate(windowWidth*SHIFT_VALUES[0], windowHeight*SHIFT_VALUES[1]);
  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}



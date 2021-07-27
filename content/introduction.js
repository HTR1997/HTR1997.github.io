let canvas;
let DIAMETER;
const SHIFT_VALUES = [1/4, 3/8];
const BACKGROUND_COLOR = 236;

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
    background(BACKGROUND_COLOR);
    circle(mouseX, mouseY, 20);//Cursor
    translate(windowWidth*SHIFT_VALUES[0], windowHeight*SHIFT_VALUES[1]);

    angle = atan2(mouseY-windowHeight*SHIFT_VALUES[1],
                  mouseX-windowWidth*SHIFT_VALUES[0]);

    circle(0,0, DIAMETER);
    push();
    stroke([44, 200, 160]);
    strokeWeight(4);
    arc(0, 0, DIAMETER, DIAMETER, angle , 0);
    pop();

  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}






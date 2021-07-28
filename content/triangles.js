let canvas;
let DIAMETER, RADIUS;
let triangles;
let n = 0;
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
  RADIUS = DIAMETER/2;



}

//Main loop 
function draw(){
  if (focused){
    background(BACKGROUND_COLOR);
    circle(mouseX, mouseY, 20);//Cursor
    translate(windowWidth*SHIFT_VALUES[0], windowHeight*SHIFT_VALUES[1]);
    rotate(n*PI/400);
    tri(0, 400);

    rotate(-n*PI/500);
    tri(0, -300);
    tri(0, 400);
    n+=1
 
  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}


function tri(center_x, center_y){
    line(center_x + RADIUS*cos(n*PI/440), center_y + RADIUS*sin(n*PI/440), 
         center_x + RADIUS*cos(TWO_PI/3+n*PI/440), center_y + RADIUS*sin(TWO_PI/3+n*PI/440));

    line(center_x + RADIUS*cos(TWO_PI/3+n*PI/440), center_y + RADIUS*sin(TWO_PI/3+n*PI/440), 
         center_x + RADIUS*cos(2*TWO_PI/3+n*PI/440), center_y + RADIUS*sin(2*TWO_PI/3+n*PI/440));

    line(center_x + RADIUS*cos(n*PI/440), center_y + RADIUS*sin(n*PI/440), 
         center_x + RADIUS*cos(2*TWO_PI/3+n*PI/440), center_y + RADIUS*sin(2*TWO_PI/3+n*PI/440));
}



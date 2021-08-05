let canvas;
let DIAMETER, RADIUS;
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

    dis = dist(mouseX-windowWidth*SHIFT_VALUES[0], mouseY-windowHeight*SHIFT_VALUES[1], 0, 0);
    angle = atan2(mouseY-windowHeight*SHIFT_VALUES[1],
      mouseX-windowWidth*SHIFT_VALUES[0]);
    
    push();
    canvas.drawingContext.setLineDash([5,15]);
    circle(0,0, DIAMETER);
    pop();

    line(0,0, RADIUS*cos(angle), RADIUS*sin(angle));
    push();
    stroke([44, 200, 160]);
    strokeWeight(4);
    arc(0, 0, DIAMETER, DIAMETER, angle , 0);
    arc(0, 0, RADIUS/4, RADIUS/4, angle , 0);
    
    arc(0, 0, 2*dis, 2*dis, angle , 0);

    fill([44, 200, 160]);
    circle(RADIUS*cos(angle), RADIUS*sin(angle), 8);
    circle(RADIUS, 0, 8);
    circle(0, 0, 8);
    pop();

  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}






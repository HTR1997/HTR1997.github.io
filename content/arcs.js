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

    angle = atan2(mouseY-windowHeight*SHIFT_VALUES[1],
      mouseX-windowWidth*SHIFT_VALUES[0]);

    circle(0,0, DIAMETER);//The main circle

    push();
    push();//Radius and second radius
    fill(0);
    circle(0, 0, 8);

    canvas.drawingContext.setLineDash([5,15]);
    line(0,0, RADIUS*cos(angle), RADIUS*sin(angle));
    line(0,0, RADIUS, 0);
    pop();




    stroke([44, 200, 160]);
    strokeWeight(4);
    arc(0, 0, DIAMETER, DIAMETER, angle , 0);

    fill([44, 200, 160]);
    circle(RADIUS*cos(angle), RADIUS*sin(angle), 8);
    circle(RADIUS, 0, 8);
    pop();

    push();//Text Area
    stroke(0);//Outline of the word (color)
    fill(0);//Internal stroke color
    strokeWeight(0);//How thick the outline of the word is (stroke)
    textFont('Courier New', 22);
    text(
      "Table of values:" + "\n" + 
      "arc length = " + Math.trunc(-1000*(angle<=0?angle:angle-TWO_PI)/TWO_PI, 3)/10 + "%"+ "\n" +
      "radius =  1" + "\n" + 
      ""
      , -windowWidth/4,3*windowHeight/8);
    pop();


  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}






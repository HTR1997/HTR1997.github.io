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

    circle(0,0, DIAMETER);//Main circle

    push();
    stroke([44, 200, 160]);
    strokeWeight(4);

    arc(0, 0, DIAMETER, DIAMETER, angle , 0);
    circle(RADIUS, 0, 8);
    circle(RADIUS*cos(angle), RADIUS*sin(angle), 8);
    pop();

    push();//Text Area
    stroke(0);//Outline of the word (color)
    fill(0);//Internal stroke color
    strokeWeight(0);//How thick the outline of the word is (stroke)
    textFont('Courier New', 22);
    text(
      "Values:" + "\n" + 
      "radius   =  1" + "\n" + 
      "diameter =  2" + "\n" + 
      "circumference = 2π" + "\n" + 
      "arc length = " + (-angle>=0?-angle:(-angle+TWO_PI)) + "\n" + 
      "           = 2π*" + Math.trunc(1000*(-angle>=0?-angle/TWO_PI:((-angle+TWO_PI)/TWO_PI)),3)/1000 + "\n" + 
      ""
      , -windowWidth/4,3*windowHeight/8);
    pop();


  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}






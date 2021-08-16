let canvas;
let DIAMETER, RADIUS;
let showComponents = true;
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
    fill([44, 200, 160]);
    strokeWeight(4);

    push();
    strokeWeight(3);

    if (showComponents) {
      line(0, 0, RADIUS*cos(angle), 0);
      line(0, 0, 0, RADIUS*sin(angle));
    } else {
      fill(96);
      stroke(96);
      line(0, 0, RADIUS*cos(angle), RADIUS*sin(angle));
    }
    pop();

    circle(RADIUS*cos(angle), 0, 8);
    circle(0, RADIUS*sin(angle), 8);
    stroke(128);
    fill(128);
    circle(0, 0, 8);

    push();
    fill([255, 5, 77]);
    stroke([255, 5, 77]);
    circle(RADIUS*cos(angle), RADIUS*sin(angle), 8);
    pop();


    pop();

    push();//Text Area
    stroke(0);//Outline of the word (color)
    fill(0);//Internal stroke color
    strokeWeight(0);//How thick the outline of the word is (stroke)
    textFont('Courier New', 22);
    text("Values:" + "\n" + 
      "exp(j\u03B8) = cos(\u03B8) + j*sin(\u03B8)" + "\n" + 
      "\u03B8 = " + (angle<=0?-angle:TWO_PI-angle).toFixed(3) + "\n" + 
      "jsin(\u03B8) =" + (angle<=0?" ":"-") + "j" + abs(sin(-angle)).toFixed(3) + "\n" + 
      " cos(\u03B8) ="+ (abs(angle)<HALF_PI?"  ":" -")  + abs(cos(-angle)).toFixed(3) + "\n" + 
      ""

      , -windowWidth/4,3*windowHeight/8);

    pop();

  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}

function mouseClicked(){
  showComponents = !showComponents;
  return false;
}




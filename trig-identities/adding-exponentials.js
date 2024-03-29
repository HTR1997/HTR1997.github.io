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

    circle(0,0, DIAMETER);

    push();
    noFill();
    stroke(0);
    strokeWeight(2);
    circle(0,0, RADIUS);
    circle(RADIUS*cos(angle)/2, RADIUS*sin(angle)/2, RADIUS);
    pop();

    push();

    if(showComponents){
      //Component section
      stroke([44, 200, 160]);
      fill([44, 200, 160]);
      strokeWeight(3);
      line(0, 0, 0, RADIUS*sin(angle)/2);
      line(RADIUS*cos(angle)/2, 0, 0, 0);
      circle(0, RADIUS*sin(angle)/2, 8);
      circle(RADIUS*cos(angle)/2, 0, 8);

      strokeWeight(2);
      line(RADIUS*cos(angle)/2, RADIUS*sin(angle)/2, RADIUS*cos(angle)/2, RADIUS*sin(angle));
      line(RADIUS*cos(angle)/2, RADIUS*sin(angle)/2, RADIUS*cos(angle), RADIUS*sin(angle)/2);
      circle(RADIUS*cos(angle), RADIUS*sin(angle)/2, 4);
      circle(RADIUS*cos(angle)/2, RADIUS*sin(angle), 4);
    } else {
      //Non-component section
      stroke(96);
      fill(96);
      strokeWeight(3);
      line(0,0, RADIUS*cos(angle)/2, RADIUS*sin(angle)/2);
      strokeWeight(2);
      line(RADIUS*cos(angle)/2, RADIUS*sin(angle)/2, RADIUS*cos(angle), RADIUS*sin(angle));
    }
    pop();

    push();
    stroke([255, 5, 77]);
    fill([255, 5, 77]);
    strokeWeight(4);

    circle(RADIUS*cos(angle), RADIUS*sin(angle), 8);
    circle(RADIUS*cos(angle)/2, RADIUS*sin(angle)/2, 8);

    stroke(128);
    fill(128);
    circle(0, 0, 8);


    pop();

    push();//Text Area
    stroke(0);//Outline of the word (color)
    fill(0);//Internal stroke color
    strokeWeight(0);//How thick the outline of the word is (stroke)
    textFont('Courier New', 22);
    text("Values:" + "\n" + 
      "exp(j\u03B8) = exp(j\u03B8)/2 + exp(j\u03B8)/2" + "\n" + 
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
}



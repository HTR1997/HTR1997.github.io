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
    push();
    translate(windowWidth*SHIFT_VALUES[0], windowHeight*SHIFT_VALUES[1]);

    angle = atan2(mouseY-windowHeight*SHIFT_VALUES[1],
      mouseX-windowWidth*SHIFT_VALUES[0]);

    push();//Overlapping arcs of color
    stroke(0);
    noStroke();
    //Outer Sum Circle
    fill([114,66,180]);
    arc(0,0, 9*DIAMETER/8, 9*DIAMETER/8, angle-PI/3, 0);
    fill(BACKGROUND_COLOR);
    circle(0,0,DIAMETER);

    //Innter theta circle
    fill([255,0,0,128]);
    arc(0,0, DIAMETER, DIAMETER, angle, 0);
    fill(BACKGROUND_COLOR);
    circle(circle(0,0, 7*DIAMETER/8));

    //Innermost constant angle circle
    fill([0,0,255,128]);
    arc(0,0, 7*DIAMETER/8, 7*DIAMETER/8, -PI/3, 0);
    fill(BACKGROUND_COLOR);
    circle(0,0,3*DIAMETER/4);
    pop();

    circle(0,0, DIAMETER);//Main circle

    push();

    if(showComponents){
      //Component section
      stroke([44, 200, 160]);
      fill([44, 200, 160]);
      strokeWeight(3);

      strokeWeight(2);

    } else {

      //Constant area arc shifted by theta
      noStroke();
      fill([0,0,255,128]);
      arc(0,0, 7*DIAMETER/8, 7*DIAMETER/8, angle-PI/3, angle);
      fill(BACKGROUND_COLOR);
      circle(0,0,3*DIAMETER/4);

 



      //Non-component section
      stroke(96);
      fill(96);
      line(0,0, RADIUS*cos(angle), RADIUS*sin(angle));
      line(0,0, RADIUS*cos(-PI/3), RADIUS*sin(-PI/3));
      line(0,0, RADIUS*cos(angle-PI/3), RADIUS*sin(angle-PI/3));

   }
    pop();

    push();//Red Points
    stroke([255, 5, 77]);
    fill([255, 5, 77]);
    strokeWeight(4);

    circle(RADIUS*cos(-PI/3), RADIUS*sin(-PI/3), 8);
    circle(RADIUS*cos(angle), RADIUS*sin(angle), 8);
    circle(RADIUS*cos(angle-PI/3), RADIUS*sin(angle-PI/3), 8);

    stroke(128);//Gray Points
    fill(128);
    circle(0, 0, 8);
    circle(RADIUS, 0, 8);

    pop();

    push();//Text Area
    stroke(0);//Outline of the word (color)
    fill(0);//Internal stroke color
    strokeWeight(0);//How thick the outline of the word is (stroke)
    textFont('Courier New', 22);
    text("Values:" + "\n" + 
      "exp(j\u03B8 + jπ/3) = exp(j\u03B8) * exp(jπ/3)" + "\n" + 
      //"\u03B8 = " + (angle<=0?-angle:TWO_PI-angle).toFixed(3) + "\n" + 
      //"jsin(\u03B8) =" + (angle<=0?" ":"-") + "j" + abs(sin(-angle)).toFixed(3) + "\n" + 
      //" cos(\u03B8) ="+ (abs(angle)<HALF_PI?"  ":" -")  + abs(cos(-angle)).toFixed(3) + "\n" + 
      ""

      , -windowWidth/4,3*windowHeight/8);

    pop();
    pop();
    circle(mouseX, mouseY, 20);//Cursor
  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}

function mouseClicked(){
  showComponents = !showComponents;
}



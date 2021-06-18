let canvas;
let DIAMETER;
let tools = 0;
const SHIFT_VALUES = [1/4, 3/8];

function setup(){
  canvas = createCanvas(800, 800);
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
    background(236);
    //background(255);

    circle(mouseX, mouseY, 20);



    translate(windowWidth*SHIFT_VALUES[0], windowHeight*SHIFT_VALUES[1]);
    circle(0,0,DIAMETER);
    let angle = atan2(mouseY-windowHeight*SHIFT_VALUES[1], 
      mouseX-windowWidth*SHIFT_VALUES[0]);
    let circleTangent = [DIAMETER*cos(angle)/2, DIAMETER*sin(angle)/2]

    push();
    stroke(83, 140, 149);
    circle(DIAMETER/2,0, 20);
    circle(-DIAMETER/2,0, 20);
    pop();

    circle(...circleTangent, 20);
    line(DIAMETER/2, 0, ...circleTangent);
    line(-DIAMETER/2, 0, ...circleTangent);

    line(DIAMETER/2, 0, -DIAMETER/2, 0);

    //line(...circleTangent, 0,0);

    if(mouseIsPressed){
      push();

      circle(-circleTangent[0], -circleTangent[1], 20);
      line(DIAMETER/2, 0, -circleTangent[0], -circleTangent[1]);
      line(-DIAMETER/2, 0, -circleTangent[0], -circleTangent[1]);

      pop();
    }

  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}

/*  COLORS
 *  (236) OFF WHITE
 *  (196, 128, 32) ORANGE
 *  (128, 196, 32) GREEN
 *  (83, 140, 149) CYAN
 *  (255, 246, 32) YELLOW
 *  (156, 46, 53)  RED
 *  (70, 130, 192) BLUE
 *  (140, 54, 198) PURPLE
 */


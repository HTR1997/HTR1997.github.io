let DIAMETER;
let tf; 


function setup(){
  var canvas = createCanvas(800, 800)
  canvas.parent('sketch-holder');
  strokeWeight(3);
  noFill();
  noCursor();
  
  //Current challenge is to find good sizes CAN BE TWEAKED LATER
  resizeCanvas(windowWidth/2,3*windowHeight/4);
  if (windowWidth < windowHeight){
    DIAMETER = windowWidth/2;

  } else {
    DIAMETER = windowHeight/2;

  }

  tf =  new TrigFunctions();

}
 
//Main loop 
function draw(){
  background(236);
  translate(windowWidth/4, 3*windowHeight/8);
  circle(0,0, DIAMETER);
  tf.iterate();

}

class TrigFunctions {
  constructor(){
    this.radius = DIAMETER/2;
    this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4)  
  }

  iterate(){
    this.update()
    this.display()
  }


  display() {
    circle(mouseX - windowWidth/4, mouseY - 3*windowHeight/8, 10);
    line(0, 0, this.radius*Math.cos(this.angle), this.radius * Math.sin(this.angle));
  }
  
  update(){
    this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4);
  }
  

}


/*  NOTES OF SOME ODD THINGS TO REMEMBER
 *  If something is spelled incorectly IT WONT RUN AT ALL
 *  ^^^^ Check this first if a change results in nothing being drawn.
 *  mouseX and mouseY are the position in the WINDOW not the canvas (or relative to it at least)
 *  so use:
 *  mouseX - windowWidth/4
 *  mouseY - 3*windowHeight/8
 *  for the mouseXY position in the window
 *  Going to need to come up with a way that doesnt use magic numbers for the canvas dimentions
 *
 */

/*  COLORS
 *  (236) OFF WHITE
 *
 *
 *
 *
 */



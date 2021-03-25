let XLIM = 800;
let YLIM = 800;
let tf; 

function setup(){
  var canvas = createCanvas(XLIM, YLIM)
  canvas.parent('sketch-holder');
  strokeWeight(3);
  noFill();
  
  //Current challenge is to find good sizes CAN BE TWEAKED LATER
  resizeCanvas(windowWidth/2,3*windowHeight/4);
  if (windowWidth < windowHeight){
    XLIM = windowWidth/2;
    YLIM = windowWidth/2;

  } else {
    XLIM = windowHeight/2;
    YLIM = windowHeight/2;

  }

  tf =  new TrigFunctions();

}
 

function draw(){
  background(236);
  //Dont use XLIM or YLIM for translation use
  //the canvas height and width
  translate(windowWidth/4, 3*windowHeight/8);
  circle(0,0, XLIM);
  //line(0, 0, XLIM/2, 0);
  tf.drew();
  tf.update()

}

class TrigFunctions {
  constructor(){
    this.radius = XLIM/2;
    this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4)  
  }

  drew() {
    circle(mouseX - windowWidth/4, mouseY - 3*windowHeight/8, 3);
    line(0,0, 40, 40);
    line(0, 0, this.radius*Math.cos(this.angle), this.radius * Math.sin(this.angle));
  }
  
  update(){
    this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4);
  }
  

}


/*  NOTES OF SOME ODD THINGS TO REMEMBER
 *  If something is spelled incorectly IT WONT RUN AT ALL
 *  mouseX and mouseY are the position in the WINDOW not the canvas (or relative to it at least)
 *  so use:
 *  mouseX - windowWidth/4
 *  mouseY - 3*windowHeight/8
 *  for the mouseXY position in the window
 *  Going to need to come up with a way that doesnt use magic numbers for the canvas dimentions
 *
 */





let canvas;
let DIAMETER;
let tf; 
let slid;
let y;

function setup(){
  canvas = createCanvas(800, 800)
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
  //slid = createSlider(3/4, 8, 2, 0);
}
 
//Main loop 
function draw(){
  background(236);
  translate(windowWidth/4, 3*windowHeight/8);
  //rotate(-PI/2);
  y = window.scrollY;

  /*Basic way to create a scrolling transition
   *Has issues with different window dimentions that need to be resolved.
   */
  if (y < 150){
    tf.setShape('triangle');
  } else {
    tf.setShape('circle');
  }
  tf.iterate();
  textSize(42);
  text(y, -windowWidth/4, +3*windowHeight/8);
}

class TrigFunctions {
  constructor(){
    this.shape = '';
    this.inverseScale = 2;
    this.diameter = DIAMETER/this.inverseScale;
    this.radius = this.diameter/2;
    this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4);
  }

  iterate(){
    this.update()
    this.display()
  }

  update(){
    //this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4);
    this.angle = -(y/300) * TWO_PI;
    this.inverseScale = slid.value();
    this.diameter = DIAMETER/this.inverseScale;
    this.radius = this.diameter/2;
  }
  
 
 display() {
    if (this.shape == 'triangle'){
      this.drawSin();
      this.drawCos();
      this.drawHypotenuse();
      this.drawCircle();


    } else if(this.shape == 'circle'){
      this.drawCircle();

      this.drawSin();
      this.drawCos();
      this.drawHypotenuse();

    } else {
      this.drawSin();


    }
    //this.drawHyperbolicRadius();
    
    //this.drawTan();
    //this.drawCot();

    //this.drawCsc();
    //this.drawSec();

    //this.drawSin();
    //this.drawCos();

    this.drawHypotenuse();
    //this.drawSinh();
    //this.drawCosh();
    

    //this.drawExtendedRadius()

    //this.drawCircle();

    //this.drawRadius();  
    //this.ppoint();

    circle(mouseX - windowWidth/4, mouseY - 3*windowHeight/8, 10); //Cursor 
  }
 
  setShape(shape){
    this.shape = shape;
  }

  

  ppoint(){
    //This is an example of a work around to fix the odd cordinate system that 
    //results from the positive x, negative y orientation of the canvas
    rotate(-PI/2);
    circle(24, 24, 7);
    rotate(PI/2);
  }
  
drawCircle(){
    stroke(0,255*y/300);
    circle(0,0, this.diameter);
  }
  
  drawRadius(){
    stroke(0);
    line(0,0, this.radius*Math.cos(this.angle), this.radius*Math.sin(this.angle));
  }

  drawExtendedRadius(){
    stroke(128);
    line(0,0, 20*this.radius*Math.cos(this.angle), 20*this.radius*Math.sin(this.angle));
    line(0,0, -20*this.radius*Math.cos(this.angle), -20*this.radius*Math.sin(this.angle));
  }

  drawHyperbolicRadius(){
    line(0,0, this.radius*Math.cosh(this.angle), this.radius*Math.sinh(this.angle));
  }

  drawHypotenuse(){
    stroke(140, 54, 198);
    line(0, this.radius*Math.sin(this.angle), this.radius*Math.cos(this.angle), 0);
  }

  drawSin(){
    stroke(70, 130, 192);
    line(0,0, 0, this.radius*Math.sin(this.angle));
  }

  drawCos(){
    stroke(156, 46, 53);
    line(0,0, this.radius*Math.cos(this.angle), 0);
  }

  drawCsc(){
    stroke(196, 128, 32);
    line(0,0, 0, this.radius/(Math.sin(this.angle)));
  }

  drawSec(){
    stroke(128, 196, 32);
    line(0,0, this.radius/(Math.cos(this.angle)), 0);
  }

  drawTan(){
    stroke(0);
    line(this.radius*Math.cos(this.angle), this.radius*Math.sin(this.angle), this.radius/Math.cos(this.angle), 0);
    //line(this.radius, 0, this.radius, this.radius*Math.tan(this.angle));
  }

  drawCot(){
    stroke(0);
    line(0, this.radius, this.radius/Math.tan(this.angle), this.radius);
  }
 
  drawSinh(){
    line(this.radius*Math.cosh(this.angle), 0, this.radius*Math.cosh(this.angle), this.radius*Math.sinh(this.angle));
    //line(this.radius/Math.cos(this.angle), 0, this.radius/Math.cos(this.angle), this.radius*Math.sinh(this.angle));
    //line(this.radius*this.angle, 0, this.radius*this.angle, this.radius*Math.sinh(this.angle));
  }

  drawCosh(){
    line(0, this.radius*Math.sinh(this.angle), this.radius*Math.cosh(this.angle), this.radius*Math.sinh(this.angle));
    //line(this.radius/Math.cos(this.angle), 0, this.radius/Math.cos(this.angle), this.radius*Math.sinh(this.angle));
    //line(this.radius*this.angle, 0, this.radius*this.angle, this.radius*Math.sinh(this.angle));
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
 *  Add to allow for drawing of dashed lines, use an empty set to use solid line
 *  canvas.drawingContext.setLineDash([5, 15]);
 */

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


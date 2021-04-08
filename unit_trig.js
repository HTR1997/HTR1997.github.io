let canvas;
let DIAMETER;
let tools; 

//TODO: Change .drawThing functions to take colors as arguments rather than being hard coded.

function setup(){
  canvas = createCanvas(800, 800)
  canvas.parent('sketch-holder');
  p5.disableFriendlyErrors = true; 
  strokeWeight(3);
  noFill();
  noCursor();
 
  //Current challenge is to find good sizes CAN BE TWEAKED LATER
  resizeCanvas(windowWidth/2,3*windowHeight/4 + 100);
  if (windowWidth < windowHeight){
    DIAMETER = windowWidth/2;
  } else {
    DIAMETER = windowHeight/2;
  }

  tools = {
    shapes: [
      new TrigFunctions(),
      //new Triangle(),
      new Cursor(),
      new Text(),
      new Debug(),
      //new UnitCircle(),
      new UnitCircleArc(),
      new UnitCircleCursor(),
      new ReverseTriangle()
    ],

    _step: function(){
      this.shapes.forEach(item => item.step());
      }
  };

}
 
//Main loop 
function draw(){
  if (focused){
    background(236);
    translate(windowWidth/4, 3*windowHeight/8);
    tools._step();
  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}

//Super class
class TrigFunctions {
  constructor(){
    this.inverseScale = 1;
    this.strokeWeight = 3;
    this.diameter = DIAMETER/this.inverseScale;
    this.radius = this.diameter/2;
    this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4);

    this.scrollAmount = window.scrollY;
  }

  step(){
    this.update()
    this.display();

    if (this.scrollAmount < 100){
    }
  }

  update(){
    this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4);
    this.diameter = DIAMETER/this.inverseScale;
    this.radius = this.diameter/2;

    this.scrollAmount = window.scrollY;
  }
  

  display() {
    //Displayes nothing but sets default drawing options.
    //Should be called by TrigFunction subclasses to draw to canvas. 
    canvas.drawingContext.setLineDash([]);//Setting dashed lines as off.
    stroke(0);
    strokeWeight(this.strokeWeight);
  }

  ppoint(){
    //This is an example of a work around to fix the odd cordinate system that 
    //results from the positive x, negative y orientation of the canvas
    rotate(-PI/2);
    circle(24, 24, 7);
    rotate(PI/2);
  }
  
  update(){
    this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4);
    this.diameter = DIAMETER/this.inverseScale;
    this.radius = this.diameter/2;
  }
  
  drawUnitCircle(){
    circle(0,0, this.diameter);
  }
  
  drawRadius(){
    line(0,0, this.radius*Math.cos(this.angle), this.radius*Math.sin(this.angle));
  }

  drawHypotenuse(){
    line(0, this.radius*Math.sin(this.angle), this.radius*Math.cos(this.angle), 0);
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
    line(this.radius*Math.cos(this.angle), this.radius*Math.sin(this.angle), 
         this.radius/Math.cos(this.angle), 0);
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
    line(0, this.radius*Math.sinh(this.angle), 
          this.radius*Math.cosh(this.angle), this.radius*Math.sinh(this.angle));
    //line(this.radius/Math.cos(this.angle), 0, 
    //      this.radius/Math.cos(this.angle), this.radius*Math.sinh(this.angle));
    //line(this.radius*this.angle, 0, 
    //      this.radius*this.angle, this.radius*Math.sinh(this.angle));
  }


  drawCursor(){
    circle(mouseX - windowWidth/4, mouseY - 3*windowHeight/8, 10); //Cursor 
  }

  drawTangentPoint(){
    circle(this.radius*Math.cos(this.angle), this.radius*Math.sin(this.angle), 10); //Cursor 
  }
  
  drawAngleArc(){
    stroke(255);
    strokeWeight(this.strokeWeight + 1);
    arc(0, 0, 
        this.diameter, this.diameter,
        this.angle, 0);
  }


   drawAngleArcPI(){
    stroke(255);
    strokeWeight(this.strokeWeight + 1);
    if (this.angle > 0) {
      arc(0, 0, 
      this.diameter, this.diameter,
      0, this.angle);
    } else {
       arc(0, 0, 
      this.diameter, this.diameter,
      this.angle, 0);
   }
 }

}

//Sub classes
class Triangle extends TrigFunctions {
  display() {
    super.display();
    this.drawHypotenuse();
    this.drawCos();
    this.drawSin();
  }
}

class ReverseTriangle extends TrigFunctions {
  display() {
    super.display();
    canvas.drawingContext.setLineDash([5,15]);
    line(0,0, this.radius*Math.cos(this.angle), 0);
    line(this.radius*Math.cos(this.angle), 0, this.radius*Math.cos(this.angle), this.radius*Math.sin(this.angle));
    this.drawRadius();


  }
}

class UnitCircle extends TrigFunctions {
  display() {
    super.display();
    this.drawUnitCircle();

  }
}

class UnitCircleCursor extends TrigFunctions {
  display() {
    super.display();
    this.drawTangentPoint();
  }
}

class Cursor extends TrigFunctions {
  display() {
    super.display();
    this.drawCursor();
  }
}

class UnitCircleArc extends TrigFunctions {
  display() {
    super.display();
    //this.drawAngleArc();
    this.drawAngleArcPI();
  }
}


class Text extends TrigFunctions {
  display(){
    super.display();
    strokeWeight(1);    
    textFont('Courier New', 22);
    text(-this.angle, -windowWidth/4, 3*windowHeight/8);
    text('hello world', -windowWidth/4, 3*windowHeight/8+22);
    //text(Math.round(frameRate()), -windowWidth/4, 3*windowHeight/8+44);
  }
}

class Debug extends TrigFunctions {
  display(){
    super.display();
    //text('Variable' + value, posx, posy);
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
 *
 *  stroke weight impacts drawing of fonts. huh.
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

/*  Slider framework
 *  let slid;
 *  slid = createSlider(3/4, 8, 2, 0);
 *  this.inverseScale = slid.value();
 */
  

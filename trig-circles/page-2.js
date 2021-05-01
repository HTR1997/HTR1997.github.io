let canvas;
let DIAMETER;
let tools; 
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

  tools = {
    shapes: [
      new UnitCircle(1.5),
      new CustomTriangle(1.5),
      new RadiusOverlay(1.5),
      new TextOverlay(1.5), 
      new Cursor()
    ],

    _step: function(){
      this.shapes.forEach(item => item.step());
    }
  };

}

//Main loop 
function draw(){
  if (focused){
    background(BACKGROUND_COLOR);
    //background(255);

    translate(windowWidth*SHIFT_VALUES[0], windowHeight*SHIFT_VALUES[1]);
    tools._step();
  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}

class CustomTriangle extends TrigFunctions {
  constructor(is=1){
    super();
    this.inverseScale=is;
  }

  display() {
    super.display();
    canvas.drawingContext.setLineDash([5,15]);
    this.drawLine([0], this.origin, this.mouse);
    this.drawLine([0], this.origin, this.mouseX);
    this.drawLine([0], this.mouseX, this.mouse);

     }
}

class RadiusOverlay extends TrigFunctions {
  constructor(is=1){
    super();
    this.inverseScale = is;
  }

  display(){
    super.display();
    this.drawRadius([0]);

  }
}

class TextOverlay extends TrigFunctions {
  constructor(is=1){
    super();
    this.inverseScale = is;
  }

  display(){
    super.display();

   this.write([(this.mouse[0])/2, (this.mouse[1])/2], 
      'c', 24);

    this.write([(this.mouse[0])/2, 0], 
      'a', 24);

    this.write([this.mouse[0], this.mouse[1]/2], 
      'b', 24);

    this.write([(this.tangentPoint[0])/2, (this.tangentPoint[1])/2], 
      '1', 24);
  }
}




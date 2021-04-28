let canvas;
let DIAMETER;
let tools; 
const SHIFT_VALUES = [1/4, 3/8];

/*TODO: Shape primatives and draw primatives
../ *      Make those slider elements that look nice.
 *      Still need a better way to set shapes, and finish adding shift parameters to draw functions.
 *      Find a way to set colorschemes and use those values as defaults for things
 *      like drawSin and drawCos.
 *      Find a better way to size the canvas based on the window.
 *      Tweaks for mobile.
 *      Set default angle to be where the mouse will aproximately be so there is less movement on page change. 
 *
 *
 *Done: Use default parameters for drawTrig functions.
 *      use getters for common trig functions.
 *
 *
 *
 *
 */

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
      //new TrigFunctions(),
      new Cursor()
      //new Text(),
      //new UnitCircle(),
      //new UnitCircleCursor(),
      //new Debug(),
      //new UnitCircleArc(),
      //new LeftTriangle(),
      //new RightTriangle()
      //new CanvasFrame()
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
    //background(255);
    
    translate(windowWidth*SHIFT_VALUES[0], windowHeight*SHIFT_VALUES[1]);
    tools._step();
  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
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
 *
 *  There are two ways to draw sin or cos. 
 *  One has them on the origin and the other has them on, a place i dont have a name for.
 *
 *  Default parameters are cool. Its posible to send 'undefined' as an argument to use the default
 *  f(a=1, b=9){ return a*b}
 *  f(undefined, 7) == 7
 *
 *
 *  Left and Right triangles. Right ones have have right angle at origin
 *  Left triangles dont have right angle at origin. (silly name used for drawing)
 *
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
  

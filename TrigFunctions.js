/*TODO: Add ability to change html and js elements with hotkey
 *      
 *      Shape primatives and draw primatives
 *      Make those slider elements that look nice.
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
//Super class
class TrigFunctions {
  constructor(){
    this.windowWidthShift = windowWidth*SHIFT_VALUES[0];
    this.windowHeightShift = windowHeight*SHIFT_VALUES[1];

    this.inverseScale = 1;//Used to scale the diameter, bigger means smaller circle 
    this.strokeWeight = 3;
    this.diameter = DIAMETER/this.inverseScale;
    this.radius = this.diameter/2;
    //this.angle = atan2(mouseY - 3*windowHeight/8, mouseX - windowWidth/4);
    this.angle = 0;
    this._mouseX = mouseX - this.windowWidthShift;
    this._mouseY = mouseY - this.windowHeightShift;
    this.scrollAmount = window.scrollY;
  }

  step(){
    this.update()
    this.display();

    if (this.scrollAmount < 100){
    }
  }

  update(){
    this._mouseX = mouseX - this.windowWidthShift;
    this._mouseY = mouseY - this.windowHeightShift;

    this.angle = atan2(this._mouseY, this._mouseX);
    this.diameter = DIAMETER/this.inverseScale;
    this.radius = this.diameter/2;

    this.scrollAmount = window.scrollY;
  }

  display() {
    //Displayes nothing but sets default drawing options.
    //Should be called by TrigFunction subclasses to draw to canvas. 
    canvas.drawingContext.setLineDash([]);//Setting dashed lines as off.
    stroke(0);
    noFill();
    strokeWeight(this.strokeWeight);
  }

  //Fundemental trig funcions and derivatives using current angle and radius
  get sin(){
    return this.radius * Math.sin(this.angle);
  }

  get cos(){
    return this.radius * Math.cos(this.angle);
  }

  get tan(){
    return this.radius * Math.tan(this.angle);
  }

  get csc(){
    return this.radius / Math.sin(this.angle);
  }

  get sec(){
    return this.radius / Math.cos(this.angle);
  }

  get cot(){
    return this.radius / Math.tan(this.angle);
  }

  get tangentPoint(){
    return [this.cos, this.sin];
  }

  get origin(){
    return [0,0];
  }

  get mouse(){
    return [this._mouseX, this._mouseY];
  }

  get mouseX(){
    return [this._mouseX, 0];
  }

  get mouseY(){
    return [0, this._mouseY];
  }
  //Drawing primatives
  drawUnitCircle(color=[0]){
    stroke(...color);
    circle(...this.origin, this.diameter);
  }

  drawLine(color=[0], start, end){
    stroke(...color);
    line(...start, ...end);
  }

  drawRadius(color=[0]){
    stroke(...color);
    line(...this.origin, 
      ...this.tangentPoint);
  }

  drawSin(color=[70, 130, 192], shift=0){
    stroke(...color);
    line(shift, 0, 
      shift, this.sin);
  }

  drawCos(color=[156, 46, 53], shift=0){
    stroke(...color);
    line(0,shift, 
      this.cos, shift);
  }

  drawCsc(color=[196, 128, 32]){
    stroke(...color);
    line(0,0, 0, this.radius/(Math.sin(this.angle)));
  }

  drawSec(color=[128, 196, 32]){
    stroke(...color);
    line(0,0, this.radius/(Math.cos(this.angle)), 0);
  }

  drawTan(color=[0]){
    stroke(...color);
    line(this.radius*Math.cos(this.angle), this.radius*Math.sin(this.angle), 
      this.radius/Math.cos(this.angle), 0);
    //line(this.radius, 0, this.radius, this.radius*Math.tan(this.angle));
  }

  drawCot(color=[0]){
    stroke(...color);
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
    circle(this._mouseX,
      this._mouseY, 10); //Cursor 
  }

  drawTangentPoint(){
    circle(this.radius*Math.cos(this.angle), 
      this.radius*Math.sin(this.angle), 10); //Cursor 
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

  drawExtendedRadius(color=[128]){
    stroke(...color);
    line(...this.origin, 
      20*this.cos, 20*this.sin);
    line(...this.origin, 
      -20*this.cos, -20*this.sin);
  }

  drawHyperbolicRadius(color=[0]){
    line(...this.origin, 
      this.radius*Math.cosh(this.angle), this.radius*Math.sinh(this.angle));
  }

  write(position=[0,0], words = '', size=24){
    textFont('Monospace');
    let tw = textWidth(words);
    noStroke();
    fill(BACKGROUND_COLOR, 255);
    rect(position[0]-tw/2, position[1]-tw, tw, size);
    strokeWeight(1);
    fill(0);
    textSize(size);
    textAlign(CENTER, CENTER);
    text(words, ...position);

    strokeWeight(this.strokeWeight);
  }

}

//Sub classes
class Triangle extends TrigFunctions {
  constructor(is=1){
    super();
    this.inverseScale = is;
  }

  display() {
    super.display();
    this.drawLine([0], [0, this.sin], [this.cos, 0]);
    this.drawCos();
    this.drawSin();
  }
}

class RightTriangle extends TrigFunctions {
  display() {
    if (mouseIsPressed){
      super.display();
      //canvas.drawingContext.setLineDash([5,15]);
      this.drawLine([140, 54, 198], [0, this.sin], [this.cos, 0]);
      this.drawCos();
      this.drawSin();
    }
  }
}

class LeftTriangle extends TrigFunctions {
  constructor(is=1){
    super();
    this.inverseScale = is;
  }

  display() {
    super.display();
    if (mouseIsPressed == false){
      canvas.drawingContext.setLineDash([5,15]);
      this.drawLine([140, 54, 198], this.origin, [this.cos, this.sin]);
      this.drawCos(undefined);
      this.drawSin(undefined, this.cos);
    }
  }
}

class UnitCircle extends TrigFunctions {
  constructor(is=1){
    super();
    this.inverseScale = is;
  }

  DEV_update() {
    super.update();
    this.diameter = 2*this.cos;
  }

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
    text('\u03B8 = ' + Math.trunc(1000*-this.angle, 3)/1000, -windowWidth/4, 3*windowHeight/8);
    //text(Math.round(frameRate()), -windowWidth/4, 3*windowHeight/8+44);
  }
}

class Debug extends TrigFunctions {
  display(){
    super.display();
    strokeWeight(1);
    textFont('Courier New', 22);
    //text('1', this.radius * Math.cos(1.1*this.angle)/2, this.radius * Math.sin(1.1*this.angle)/2);

    //this.drawRadius();
    //strokeWeight(1);
    //textFont('Courier New', 22);
    //text(this.tangentPoint, -windowWidth/4, 3*windowHeight/8 + 44);

    //line(0,0, ...this.tangentPoint);
    //this.drawRadius();
    //this.drawSin(undefined,this.cos);
  }
}

class CanvasFrame extends TrigFunctions {
  display(){
    super.display();
    line(-windowWidth/4,1-3*windowHeight/8, windowWidth/4,1-3*windowHeight/8); 
    line(-windowWidth/4,1+ 3*windowHeight/8, windowWidth/4,1+3*windowHeight/8); 
    line(1-windowWidth/4,1-3*windowHeight/8, 1-windowWidth/4,1+3*windowHeight/8); 
    line(windowWidth/4-1,1-3*windowHeight/8, windowWidth/4-1,1+3*windowHeight/8); 
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

/*  Dashed lines
 *  canvas.drawingContext.setLineDash([5,15]);
 */

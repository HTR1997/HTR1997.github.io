let canvas;
let DIAMETER;
let tools = 0;
let tg;
const SHIFT_VALUES = [1/4, 3/8];

function setup(){
  canvas = createCanvas(800, 800);
  canvas.parent('sketch-holder');
  p5.disableFriendlyErrors = true; 
  strokeWeight(3);
  noFill();
  noCursor();
  rectMode(CENTER);


  //Current challenge is to find good sizes CAN BE TWEAKED LATER
  resizeCanvas(windowWidth, windowHeight);
  if (windowWidth < windowHeight){
    DIAMETER = windowWidth/2;
  } else {
    DIAMETER = windowHeight/2;
  }

  tg = new TombGraph();

}

//Main loop 
function draw(){
  if (focused){
    background(236);
    //background(255);

    //Cursor
    circle(mouseX, mouseY, 20);
    let ang = atan2(mouseY-windowHeight*SHIFT_VALUES[1], mouseX-windowWidth*SHIFT_VALUES[0]);
    translate(windowWidth*SHIFT_VALUES[0], windowHeight*SHIFT_VALUES[1]);

    let rectSize = ceil(DIAMETER/5.5);//About 90

    circle(0,0,20); //P
    tg.display(ang);

  } else {
    //Do nothing
    //May reduce cpu usage when not the focused page. 
  }
}

class TombGraph{
  constructor(){
    this.rectSize = ceil(DIAMETER/5.5);//About 90
    this.rectAngle = 20;//Angle for square to have soft edges
    this.p = new Rec();
    this.vertices = [
      new Rec([0,0]),
      new Rec([0,this.rectSize*6],1),
      new Rec([0,this.rectSize*4],2),
      new Rec([this.rectSize*2,this.rectSize*4],3),
      new Rec([-this.rectSize*2,this.rectSize*4],4),
      new Rec([0,this.rectSize*2],5),
      new Rec([this.rectSize*4, this.rectSize*2],6),
      new Rec([-this.rectSize*4, this.rectSize*2],7),
      new Rec([this.rectSize*3, 0],8),
      new Rec([-this.rectSize*3, 0],9),
      new Rec([0, -this.rectSize*2],10)
    ];
  }
  display(_ang){
    this.vertices.forEach(item => item.display(_ang)); 
  }
}

class Rec{
  constructor(_pos=[0,0], _internalType=0){
    this.rectSize = ceil(DIAMETER/5.5);//About 90 XXX Might change this size to be a bit bigger and change the circle size as well.
    this.rectAngle = 20;//Angle for square to have soft edges
    this.position = _pos;
    this.circleDiameter = 3*this.rectSize/4;
    this.circleRadius = 3*this.rectSize/8;
    this.internalType = _internalType;
    this.pointSize = 5;
  }
  display(angle){
    rect(...this.position, this.rectSize, this.rectSize, this.rectAngle);
    circle(...this.position, this.circleDiameter);
    //Might want to pre calulate cos and sin, it may already be cashed though.XXX

    switch(this.internalType){
      case 0:
        break;

      case 1:
        push();
        stroke(...color.black);
        //Radius
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        pop();
        break;

      case 2:
        push();
        //Radius
        stroke(...color.black);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //Cos
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], 0 + this.position[1]);
        //circle(this.circleRadius*cos(angle) + this.position[0], this.position[1], this.pointSize);

        //Sin
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        //circle(this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        pop();
        break;

      case 3:
        push();
        //Radius
        stroke(...color.black);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //Cos
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.position[1]);
        
        //Sin
        stroke(...color.red);
        line(this.circleRadius*cos(angle) + this.position[0], this.position[1], 
          this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        pop();
        break;

      case 4:
        push();
        //Radius
        stroke(...color.black);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        //Cos (above)
        stroke(...color.blue);
        line(this.position[0], this.circleRadius*sin(angle) + this.position[1], 
          this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);

        //Sin
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        pop();
        break;

      case 5:
        push();
        //Radius
        stroke(...color.black);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        //COS
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], 0 + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.position[1], this.pointSize);

        //SIN
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //SEC
        stroke(...color.lightBlue);
        line(...this.position,
          this.circleRadius/cos(angle) + this.position[0], this.position[1]);
        circle(this.circleRadius/cos(angle) + this.position[0], this.position[1],this.pointSize);

        //CSC
        stroke(...color.lightRed);
        line(...this.position,
          this.position[0], this.circleRadius/sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius/sin(angle) + this.position[1], this.pointSize);
        pop();
        break;

      case 6: 
        push();
        //COS
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], 0 + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.position[1], this.pointSize);

        //SIN
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //TAN
        stroke(...color.purple);
        if (abs(angle) <= HALF_PI){
          line(this.position[0] + this.circleRadius, this.position[1], 
            this.position[0] + this.circleRadius, this.position[1] + this.circleRadius*tan(angle));
        } else {
          line(this.position[0] - this.circleRadius, this.position[1], 
            this.position[0] - this.circleRadius, this.position[1] - this.circleRadius*tan(angle));
        }

        //Radius
        stroke(...color.black);
        line(...this.position, this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle));
        circle(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle), this.pointSize);
        pop();
        break;

      case 7:
        push();
        //COS
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], 0 + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.position[1], this.pointSize);

        //SIN
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //COTAN
        stroke(...color.lightPurple);
        if (angle > 0){
          line(this.position[0], this.position[1] + this.circleRadius,
            this.position[0] + this.circleRadius/tan(angle), this.position[1] + this.circleRadius);
        } else {
          line(this.position[0], this.position[1] - this.circleRadius,
            this.position[0] - this.circleRadius/tan(angle), this.position[1] - this.circleRadius);
        }

        //Radius
        stroke(...color.black);
        line(...this.position, this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle));
        circle(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle), this.pointSize);
        pop();
        break;

      case 8:
        push();
        //COS
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], 0 + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.position[1], this.pointSize);

        //SIN
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //Radius
        stroke(...color.black);
        line(...this.position, this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle));
        circle(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle), this.pointSize);

        //SEC
        stroke(...color.lightBlue);
        line(...this.position,
          this.circleRadius/cos(angle) + this.position[0], this.position[1]);
        circle(this.circleRadius/cos(angle) + this.position[0], this.position[1],this.pointSize);

        //TAN
        stroke(...color.purple);
        line(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle),
          this.circleRadius/cos(angle) + this.position[0], this.position[1]);
        pop();
        break;

      case 9:
        push();
        //COS
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], 0 + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.position[1], this.pointSize);

        //SIN
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        
        //Radius
        stroke(...color.black);
        line(...this.position, this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle));
        circle(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle), this.pointSize);

        //CSC
        stroke(...color.lightRed);
        line(...this.position,
          this.position[0], this.circleRadius/sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius/sin(angle) + this.position[1],this.pointSize);

        //COT
        stroke(...color.lightPurple);
        line(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle),
          this.position[0], this.circleRadius/sin(angle) + this.position[1]);
        pop();
        break;


      case 10:
        push();
        //Radius
        stroke(...color.black);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //COS
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], 0 + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.position[1], this.pointSize);

        //SIN
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //SEC
        stroke(...color.lightBlue);
        line(...this.position,
          this.circleRadius/cos(angle) + this.position[0], this.position[1]);
        circle(this.circleRadius/cos(angle) + this.position[0], this.position[1],this.pointSize);

        //CSC
        stroke(...color.lightRed);
        line(...this.position,
          this.position[0], this.circleRadius/sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius/sin(angle) + this.position[1], this.pointSize);

        //TAN+COT
        stroke(...color.black);
        line(this.circleRadius/cos(angle) + this.position[0], this.position[1],
          this.position[0], this.circleRadius/sin(angle) + this.position[1]);
        pop();
        break;


      default:
        break;
    }
  }
}

let color = {
  black:[0],
  red:[255,0,0],
  blue:[0,0,255],
  lightBlue:[50,140,170],
  lightRed:[170,50,100],
  purple:[135,50,170],
  lightPurple:[170,120,180]


};


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


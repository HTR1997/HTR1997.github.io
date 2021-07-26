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
        //Cos
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], 0 + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.position[1], this.pointSize);

        //Sin
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);

        //Radius
        stroke(...color.black);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        pop();
        break;

      case 3:
        push();
        //Cos
        stroke(...color.blue);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.position[1]);
        
        //Sin
        stroke(...color.red);
        line(this.circleRadius*cos(angle) + this.position[0], this.position[1], 
          this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);

        //Radius
        stroke(...color.black);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        pop();
        break;

      case 4:
        push();
        //Cos (above)
        stroke(...color.blue);
        line(this.position[0], this.circleRadius*sin(angle) + this.position[1], 
          this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);

        //Sin
        stroke(...color.red);
        line(...this.position, this.position[0], this.circleRadius*sin(angle) + this.position[1]);

        //Radius
        stroke(...color.black);
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        pop();
        break;

      case 5:
        push();
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
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        pop();
        break;

      case 6: 
        push();
        //SEC
        stroke(...color.lightBlue);
        if (abs(angle) <= HALF_PI){
          line(...this.position,
            this.position[0] + this.circleRadius, this.position[1] + this.circleRadius*tan(angle));
          //circle(this.position[0] + this.circleRadius, this.position[1] + this.circleRadius*tan(angle), this.pointSize);
        } else {
          line(...this.position,
            this.position[0] - this.circleRadius, this.position[1] - this.circleRadius*tan(angle));
          //circle(this.position[0] - this.circleRadius, this.position[1] - this.circleRadius*tan(angle), this.pointSize);
        }

        //TAN
        stroke(...color.purple);
        if (abs(angle) <= HALF_PI){
          line(this.position[0] + this.circleRadius, this.position[1], 
            this.position[0] + this.circleRadius, this.position[1] + this.circleRadius*tan(angle));
            circle(this.position[0] + this.circleRadius, this.position[1] + this.circleRadius*tan(angle), this.pointSize);
        } else {
          line(this.position[0] - this.circleRadius, this.position[1], 
            this.position[0] - this.circleRadius, this.position[1] - this.circleRadius*tan(angle));
            circle(this.position[0] - this.circleRadius, this.position[1] - this.circleRadius*tan(angle), this.pointSize);
        }

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
        //line(...this.position, this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle));
        push();
        fill(...color.black);
        circle(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle), this.pointSize);
        pop();
        pop();
        break;

      case 7:
        push();
        //CSC
        stroke(...color.lightRed);
        if (angle > 0){
          line(...this.position,
            this.position[0] + this.circleRadius/tan(angle), this.position[1] + this.circleRadius);
        } else {
          line(...this.position,
            this.position[0] - this.circleRadius/tan(angle), this.position[1] - this.circleRadius);
        }

        //COTAN
        stroke(...color.lightPurple);
        if (angle > 0){
          line(this.position[0], this.position[1] + this.circleRadius,
            this.position[0] + this.circleRadius/tan(angle), this.position[1] + this.circleRadius);
          circle(this.position[0] + this.circleRadius/tan(angle), this.position[1] + this.circleRadius, this.pointSize);
        } else {
          line(this.position[0], this.position[1] - this.circleRadius,
            this.position[0] - this.circleRadius/tan(angle), this.position[1] - this.circleRadius);
          circle(this.position[0] - this.circleRadius/tan(angle), this.position[1] - this.circleRadius, this.pointSize);
        }

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
        //line(...this.position, this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle));
        push();
        fill(color.black);
        circle(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle), this.pointSize);
        pop();
        pop();
        break;

      case 8:
        push();
        //TAN
        stroke(...color.purple);
        line(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle),
          this.circleRadius/cos(angle) + this.position[0], this.position[1]);

        //SEC
        stroke(...color.lightBlue);
        line(...this.position,
          this.circleRadius/cos(angle) + this.position[0], this.position[1]);
        circle(this.circleRadius/cos(angle) + this.position[0], this.position[1],this.pointSize);
        
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

        pop();
        break;

      case 9:
        push();
        //COT
        stroke(...color.lightPurple);
        line(this.position[0] + this.circleRadius*cos(angle), this.position[1] + this.circleRadius*sin(angle),
          this.position[0], this.circleRadius/sin(angle) + this.position[1]);

        //CSC
        stroke(...color.lightRed);
        line(...this.position,
          this.position[0], this.circleRadius/sin(angle) + this.position[1]);
        circle(this.position[0], this.circleRadius/sin(angle) + this.position[1],this.pointSize);
         
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
        pop();
        break;


      case 10:
        push();
        //TAN+COT
        /*
        stroke(...color.black);
        line(this.circleRadius/cos(angle) + this.position[0], this.position[1],
          this.position[0], this.circleRadius/sin(angle) + this.position[1]);
        */
        //TAN
        stroke(...color.purple);
        line(this.circleRadius/cos(angle) + this.position[0], this.position[1],
          this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);

        //COT
        stroke(...color.lightPurple);
        line(this.position[0], this.circleRadius/sin(angle) + this.position[1],
          this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);


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
        line(...this.position, this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1]);
        circle(this.circleRadius*cos(angle) + this.position[0], this.circleRadius*sin(angle) + this.position[1], this.pointSize);
        pop();
        break;


      default:
        break;
    }
  }
}

let color = {
  black:[0],//Radius
  red:[255,0,0],//Sin
  blue:[0,0,255],//Cos
  lightBlue:[128,128,255],//Sec
  lightRed:[255,128,0],//Csc
  purple:[128,0,128],//Tan
  lightPurple:[212,155,212]//Cot
};

let old_color = {
  black:[0],//Radius
  red:[255,0,0],//Sin
  blue:[0,0,255],//Cos
  lightBlue:[50,140,170],//Sec
  lightRed:[170,50,100],//Csc
  purple:[135,50,170],//Tan
  lightPurple:[170,120,180]//Cot
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


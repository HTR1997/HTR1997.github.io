let XLIM = 800;
let YLIM = 800;


function setup(){
  var canvas = createCanvas(XLIM, YLIM)
  canvas.parent('sketch-holder');
  strokeWeight(3);
  
  //Current challenge is to find good sizes CAN BE TWEAKED LATER
  resizeCanvas(windowWidth/2,3*windowHeight/4);
  if (windowWidth < windowHeight){
    XLIM = windowWidth/2;
    YLIM = windowWidth/2;

  } else {
    XLIM = windowHeight/2;
    YLIM = windowHeight/2;

  }

}
 

function draw(){
  background(236);
  //Dont use XLIM or YLIM for translation use
  //the canvas height and width
  translate(windowWidth/4, 3*windowHeight/8)
  circle(0,0, XLIM);
  drawPattern();





}


function drawPattern(){
  //var arcPercent = round(mouseX/XLIM, 3);
  var arcPercent = mouseX/1000;

  var i = 0;
  for (i = 0; i < 50; i+=1){
    line(XLIM*cos(arcPercent * i * TWO_PI)/2, YLIM*sin(arcPercent * i * TWO_PI)/2, 
         XLIM*cos(arcPercent * (i+1) * TWO_PI)/2, YLIM*sin(arcPercent * (i+1) * TWO_PI)/2)

  }

function centeredLine(x1, y1, x2, y2){
  line(XLIM/2 + x1, YLIM/2 - y1,
       XLIM/2 + x1, YLIM/2 - y1)


}


}


var signalWidth = 30;
var signalHeight = 30;

function drawCar(c){
  rectMode(CENTER);
  stroke(c.colorSec);
  fill(c.colorPri);
  rect(c.x, c.y, c.w, c.h);
}

function drawSignal(s){
  fill(s.color);
  stroke("BLACK");
  ellipse(s.x, s.y ,signalWidth, signalHeight);
}

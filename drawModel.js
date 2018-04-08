
var signalWidth = 20;
var signalHeight = 20;

function drawCar(c){
  rectMode(CENTER);
  stroke(c.colorSec);
  fill(c.colorPri);
  rect(c.x, c.y, c.w, c.h);
}

function drawSignal(s){
  fill(s.color);
  stroke("BLACK");
  strokeWeight(2);
  ellipse(s.x, s.y ,signalWidth, signalHeight);
}

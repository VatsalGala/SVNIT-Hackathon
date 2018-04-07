
var signalWidth = 30;
var signalHeight = 30;

function drawCar(c){
  rectMode(CENTER);
  fill(c.colorPri);
  rect(c.x, c.y, c.w, c.h);
}

function drawSignal(s){
  fill(s.color);
  ellipse(s.x, s.y ,signalWidth, signalHeight);
}

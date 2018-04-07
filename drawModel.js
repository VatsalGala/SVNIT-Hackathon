
var signalWidth = 20;
var signalHeight = 20;

function drawCar(c){
  rectMode(CENTER);
  fill(c.colorPri);
  rect(c.x, c.y, c.w, c.h);
}

function drawSignal(s){
  fill(s.color);
  rect(s.x, s.y ,signalWidth, signalHeight);
}

var c;
var carArr = [];
var signalArr = [];
function setup() {
	height=650;
	width=650;
	nodeVal=[2,11,3,9,10,9,
			 0,14,9,14,5,12,
			 0,12,6,5,8,12,
			 0,6,11,9,6,13,
			 0,0,6,7,11,5,
			 0,0,0,0,4,0];
	frameRate(30);
	loadMap();
	carArr = populateCars();
	signalArr = populateSignals();
	background(100);
	createCanvas(height,width);
}

function draw() {
	background(100);
	drawMap();
	carArr.map(moveCar);
	carArr.map(drawCar);
	signalArr.map(updateSignal);
	signalArr.map(drawSignal);


}

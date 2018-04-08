var c;
var carArr = [];
var signalArr = [];
var emArr = [];
var amb;
var emergencyLevel;

function setup() {
	emergencyLevel = 2;
	height=1000;
	width=1000;
	nodeVal=[
			2,11,3,9,10,9,0,0,0,0,
			0,14,9,14,5,12,0,0,0,0,
			0,12,6,5,8,12,0,0,0,0,
			0,6,11,9,6,13,0,0,0,0,
			0,0,6,7,11,5,0,0,0,0,
			0,0,0,0,4,0,0,0,0,0, 
			0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,
			 ];
	GRID_WIDTH = 10;
	GRID_HEIGHT = 10;
	GR_DM = GRID_HEIGHT*GRID_WIDTH;
	BLOCK_WIDTH = 50;
	BL_HF = BLOCK_WIDTH/2;
	BL_QT = BLOCK_WIDTH/4;
	BL_TF = BLOCK_WIDTH*3/4;
	loadMap();
	frameRate(30);
	carArr = populateCars();
	signalArr = populateSignals();
	background(100);
	createCanvas(height,width);
	amb = new Car('Blue','Black');
	// // fir = new Car('Orange','Black');
	// // set_src_dest(fir, 3, 29, 2);
	set_src_dest(amb, 0, AVAILABLE_NODES[5], 3);
	// // emArr.push(fir);
	emArr.push(amb);
}

function draw() {
	background(100);
	drawMap();
	signalArr.map(updateSignal);
	carArr.map(updateCar);
	emArr.map(updateAmbulance);
	signalArr.map(drawSignal);
	carArr.map(drawCar);
	emArr.map(drawCar);

}

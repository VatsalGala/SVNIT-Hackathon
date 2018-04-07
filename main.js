var c;
var carArr = [];
var signalArr = [];
var emArr = [];
var amb;
var emergencyLevel;

function setup() {
	emergencyLevel = 2;
	height=650;
	width=650;
	nodeVal=[2 ,11,3 ,9 ,10,9 ,
			 		 0 ,14,9 ,14,5 ,12,
					 0 ,12,6 ,5 ,8 ,12,
					 2 ,15,11,9 ,6 ,13,
					 0 ,6 ,3 ,7 ,11,5 ,
					 0 ,0 ,0 ,0 ,4 ,0 ];
	frameRate(30);
	loadMap();
	carArr = populateCars();
	signalArr = populateSignals();
	background(100);
	createCanvas(height,width);
	amb = new Car('Blue','Black');
	fir = new Car('Orange','Black');
	set_src_dest(fir, 3, 29, 2);
	set_src_dest(amb, 14, 34, 3);
	emArr.push(fir);
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

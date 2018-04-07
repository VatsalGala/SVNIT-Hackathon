var c;
var c_arr = [];
function setup()
{
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
	for(var i=0;i<10;i++){
		c_arr.push(new Car());
	}
	background(100);
	createCanvas(height,width);
}

function draw()
{
	background(100);
	drawMap();
	c_arr.map(moveCar);
	c_arr.map(drawCar);

}
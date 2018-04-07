function setup()
{
	height=650;
	width=650;
	loadMap();
	// printMap();
	background(100);
	createCanvas(height,width);
}

function draw()
{
	background(100);
	drawMap();
	// car = {x:475,y:475,head:{top:false, bottom:false,
	// 						left:true, right:false},
	// 		w:15,h:15}
	// drawCar(car);
}
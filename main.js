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
				2,	11,	3,	9,	10,	11,	3,	3,	3,	9,
				0,	14,	9,	14,	5,	14,	3,	9,	0,	12,
				0,	12,	6,	5,	8,	14,	3,	5,	0,	12,
				10,	7,	11,	9,	6,	15,	3,	11,	3,	5,
				12,	0,	6,	7,	11,	5,	0,	12,	0,	0,
				14,	11,	3,	3,	13,	10,	3,	15,	3,	9, 
				12,	12,	0,	0,	12,	12,	10,	15,	3,	13,
				14,	7,	3,	11,	15,	15,	15,	15,	3,	13,
				12,	0,	0,	12,	12,	12,	12,	12,	0,	12,
				6,	3,	3,	7,	5,	6,	7,	7,	3,	5
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
	fir = new Car('lightBlue','Black');
	set_src_dest(amb, 0, AVAILABLE_NODES[5], 3);
	set_src_dest(fir, AVAILABLE_NODES[AVAILABLE_NODES.length-1], AVAILABLE_NODES[7], 3);
	emArr.push(amb);
	emArr.push(fir);

}

function draw() {
	background(100);
	rectMode(CORNER);
	fill(color(133,87,35));
	stroke(color(133,87,35));
	rect(BL_HF,BL_HF,GRID_WIDTH*BLOCK_WIDTH-BL_HF,GRID_HEIGHT*BLOCK_WIDTH-BL_HF);
	drawRiver();
	drawMap();
	signalArr.map(updateSignal);
	carArr.map(updateCar);
	emArr.map(function(x) { return updateAmbulance(x,0);});
	emArr.map(drawPath);
	signalArr.map(drawSignal);
	carArr.map(drawCar);
	emArr.map(drawCar);

}

function drawRiver(){
	var x=roads[94].x;
	var y=roads[94].y;
	var x1=roads[45].x;
	var y1=roads[45].y;
	fill('cyan');
	stroke("cyan");
	rectMode(CORNER);
	rect(x+BL_QT,y1-BL_QT,BL_HF,y+BL_QT-y1+BL_QT);
	x=roads[45].x;
	y=roads[45].y;
	rect(x-BL_QT,y-BLOCK_WIDTH,BLOCK_WIDTH*4+BL_HF,2*BLOCK_WIDTH);
	
}

function mouseClicked(){
	console.log("Hi");
	var dist=[];
	var x=mouseX,y=mouseY;
	for(var i=0;i<AVAILABLE_NODES.length;i++)
	{
		dist.push(dist1(roads[AVAILABLE_NODES[i]].x-x,roads[AVAILABLE_NODES[i]].y-y));
	}
	var min_node=roads[AVAILABLE_NODES[0]],min=dist[0],min_dist=AVAILABLE_NODES[0];
	for(var i=1;i<AVAILABLE_NODES.length;i++)
	{
		if(dist[i]<min){
			min_node=roads[AVAILABLE_NODES[i]];
			min=dist[i];
			min_dist=AVAILABLE_NODES[i];
		}
	}
	console.log(min,min_dist,min_node);
	
	var l=[];
	for(var i=0;i<emArr.length;i++)
	{
		l.push(dijkstra(emArr[i].src, min_dist).length);
	}
	var min_i=0;
	for(var i=1;i<l.length;i++)
	{
		if(l[i]<l[min_i]) min_i=i;
	}
	updateAmbulance(emArr[min_i],min_dist);

	// var l1 = dijkstra(emArr[0].src, min_dist).length;
	// var l2 = dijkstra(emArr[1].src, min_dist).length;
	// if(l1<l2)
	// 	updateAmbulance(emArr[0],min_dist);
	// else
	// 	updateAmbulance(emArr[1],min_dist);


}

function dist1(a,b)
{
	return Math.sqrt(a*a+b*b);
}
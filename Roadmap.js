function Node() {
	this.val=0;
	this.x=10;
	this.y=10;
}

var height;
var width;
var nodeVal=[];
var roads=[];

function loadMap()
{	
	var nodeVal=[2,11,3,9,10,9,
				 0,14,9,14,5,12,
				 0,12,6,5,8,12,
				 0,6,11,9,6,13,
				 0,0,6,7,11,5,
				 0,0,0,0,4,0];
	for(var i=0;i<36;i++) roads.push(new Node());
	for (var i=0;i<6;i++)
	{
		for(var j=0;j<6;j++)
		{
			var ind=6*j+i;
			// roads.push(new Node());
			// console.log(ind+"\n");
			roads[ind].x=75+i*100;
			roads[ind].y=75+j*100;
			roads[ind].val=nodeVal[ind];
		}
	}
}

// function setup()
// {
// 	height=650;
// 	width=650;
// 	loadMap();
// 	// printMap();
// 	background(100);
// 	createCanvas(height,width);
// }

// function draw()
// {
// 	background(100);
// 	drawMap();
// }


function printMap()
{
	for(var i=0;i<36;i++)
	{
		console.log(roads[i].x+"\t"+roads[i].y+"\t"+roads[i].val+"\n");
	}
}

function drawMap()
{
	for(var i=0;i<36;i++)
	{
		ellipse(roads[i].x,roads[i].y,10,10);
	}
	for(var i=0;i<36;i++)
	{
		rectMode(CENTER);
		x=roads[i].x;	y=roads[i].y;
		if(roads[i].val!=0){
		if((roads[i].val&8)>0)
		{
			var x,x1,y,y1;
			x=roads[i].x;	y=roads[i].y;
			fill("white");

			// line(x-25,y+25,x-25,y+75);
			// line(x+25,y+25,x+25,y+75);
			stroke("WHITE");
			rect(x,y+25,50,100);
			// rect(x,y+50,50,50);
		}
		else{

			// line(x-25,y+25,x+25,y+25);
		}

		if((roads[i].val&4)==0){
			// line(x-25,y-25,x+25,y-25);
		}else{
			rect(x,y-25,50,100);
		}
		if((roads[i].val&2)>0)
		{

			x=roads[i].x;	y=roads[i].y;
			// line(x+25,y+25,x+75,y+25);
			// line(x+25,y-25,x+75,y-25);
			rect(x+25,y,100,50);
		}
		else{
			// line(x+25,y+25,x+25,y-25);	
		}
		if((roads[i].val&1)==0){
			// line(x-25,y+25,x-25,y-25);
		}else{
			rect(x-25,y,100,50);
		}

	}}
}

function checkAvail(car){
	var indx = (car.x-75)/100*6 + (car.y-75)/100;
	var val = roads[indx].val;
	var avail = {top	:(val&4)!=0,
				bottom	:(val&8)!=0,
				left	:(val&1)!=0,
				right	:(val&2)!=0};
	car.avail = avail;
}
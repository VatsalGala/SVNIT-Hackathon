function Node() {
	this.val=0;
	this.x=10;
	this.y=10;
	this.signal = null;
}

var AVAILABLE_NODES = [];
var height;
var width;
var nodeVal=[];
var roads=[];
var nodeVal=[2,11,3,9,10,9,
			 0,14,9,14,5,12,
			 0,12,6,5,8,12,
			 0,6,11,9,6,13,
			 0,0,6,7,11,5,
			 0,0,0,0,4,0];

function loadMap()
{
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
	check_available_nodes();
}

function printMap()
{
	for(var i=0;i<36;i++)
	{
		console.log(roads[i].x+"\t"+roads[i].y+"\t"+roads[i].val+"\n");
	}
}

function drawMap()
{
	fill("WHITE");stroke("white");
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
	var indx = car.x*6+car.y;console.log(indx);
	var val = roads[indx].val;
	var avail = {top	:(val&4)!=0,
				bottom	:(val&8)!=0,
				left	:(val&1)!=0,
				right	:(val&2)!=0};
	car.avail = avail;
}

function dijkstra(start,end){
	var edge=[];
	for(var i=0;i<36;i++)
	{
		var e1=[];
		for(var j=0;j<36;j++)
		{
			e1.push(0);
		}
		if(nodeVal[i]!=0)
		{
			if((nodeVal[i]&8)>0){
				e1[i+6]=1;
			}
			if((nodeVal[i]&4)>0){
				e1[i-6]=1;
			}
			if((nodeVal[i]&2)>0){
				e1[i+1]=1;
			}
			if((nodeVal[i]&1)>0){
				e1[i-1]=1;
			}
		}
		edge.push(e1);
	}
	return (Dijkstra(edge,start,end));
}


function Dijkstra(edge,start,end)
{
    var prev=[];
    for(var i=0;i<36;i++) prev.push(i);
    var visited=[];
    for(var i=0;i<36;i++) visited.push(0);
    var found=[];
    var u=start;
    visited[u]=1;
    var crt=0;
    found.push(u);
    while(crt<found.length)
    {
	    var idx=found[crt++];
	    for(var i=0;i<36;i++)
	    {
	        if(edge[idx][i]!=0&&visited[i]==0)
	        {
                prev[i]=idx;
                visited[i]=1;
                found.push(i);
            }
        }
        // console.log(crt);
	}
	path=[];
	if(prev[end]==end) {console.log("Path not found!!!!!!!!!!!");return;}
	path.push(end);
	for(var i=end;i!=prev[i];i=prev[i])
	{
		path.unshift(prev[i]);
	}
	return path;
}
 function drawPath(path){
 	for(var i=1;i<path.length;i++)
 	{
 		stroke(color(255,0,0));
 		line(roads[path[i]].x,roads[path[i]].y,roads[path[i-1]].x,roads[path[i-1]].y);
 	}
 }

 function check_available_nodes(){
 	for(var i=0;i<nodeVal.length;i++) if(nodeVal[i]!=0) AVAILABLE_NODES.push(i);
 }

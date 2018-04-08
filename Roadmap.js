function Node() {
	this.val=0;
	this.x=10;
	this.y=10;
	this.signal = null;
}

var GRID_WIDTH;
var GRID_HEIGHT;
var GR_DM;
var BLOCK_WIDTH;
var BL_HF = BLOCK_WIDTH/2;
var BL_QT = BLOCK_WIDTH/4;
var BL_TF = BLOCK_WIDTH*3/4;
var AVAILABLE_NODES = [];
var height;
var width;
var roads=[];
var nodeVal=[];

function loadMap()
{
	for(var i=0;i<GRID_WIDTH*GRID_HEIGHT;i++) roads.push(new Node());
	for (var i=0;i<GRID_HEIGHT;i++)
	{
		for(var j=0;j<GRID_WIDTH;j++)
		{
			var ind=GRID_WIDTH*j+i;
			// roads.push(new Node());
			// console.log(ind+"\n");
			roads[ind].x=BL_TF+i*BLOCK_WIDTH;
			roads[ind].y=BL_TF+j*BLOCK_WIDTH;
			roads[ind].val=nodeVal[ind];
		}
	}
	check_available_nodes();
}

function printMap()
{
	for(var i=0;i<GRID_WIDTH*GRID_HEIGHT;i++)
	{
		console.log(roads[i].x+"\t"+roads[i].y+"\t"+roads[i].val+"\n");
	}
}

function drawMap()
{
	fill("WHITE");stroke("white");
	for(var i=0;i<GRID_HEIGHT*GRID_WIDTH;i++)
	{
		ellipse(roads[i].x,roads[i].y,10,10);
	}
	for(var i=0;i<GRID_WIDTH*GRID_HEIGHT;i++)
	{
		rectMode(CENTER);
		x=roads[i].x;	y=roads[i].y;
		if(roads[i].val!=0){
		if((roads[i].val&8)>0)
		{
			var x,x1,y,y1;
			x=roads[i].x;	y=roads[i].y;
			fill("white");

			// line(x-BL_QT,y+BL_QT,x-BL_QT,y+BL_TF);
			// line(x+BL_QT,y+BL_QT,x+BL_QT,y+BL_TF);
			stroke("WHITE");
			rect(x,y+BL_QT,BL_HF,BLOCK_WIDTH);
			// rect(x,y+BL_HF,BL_HF,BL_HF);
		}
		else{

			// line(x-BL_QT,y+BL_QT,x+BL_QT,y+BL_QT);
		}

		if((roads[i].val&4)==0){
			// line(x-BL_QT,y-BL_QT,x+BL_QT,y-BL_QT);
		}else{
			rect(x,y-BL_QT,BL_HF,BLOCK_WIDTH);
		}
		if((roads[i].val&2)>0)
		{

			x=roads[i].x;	y=roads[i].y;
			// line(x+BL_QT,y+BL_QT,x+BL_TF,y+BL_QT);
			// line(x+BL_QT,y-BL_QT,x+BL_TF,y-BL_QT);
			rect(x+BL_QT,y,BLOCK_WIDTH,BL_HF);
		}
		else{
			// line(x+BL_QT,y+BL_QT,x+BL_QT,y-BL_QT);
		}
		if((roads[i].val&1)==0){
			// line(x-BL_QT,y+BL_QT,x-BL_QT,y-BL_QT);
		}else{
			rect(x-BL_QT,y,BLOCK_WIDTH,BL_HF);
		}

	}}
}

function checkAvail(car){
	var indx = car.x*GRID_WIDTH+car.y;console.log(indx);
	var val = roads[indx].val;
	var avail = {top	:(val&4)!=0,
				bottom	:(val&8)!=0,
				left	:(val&1)!=0,
				right	:(val&2)!=0};
	car.avail = avail;
}

function dijkstra(start,end){
	var edge=[];
	for(var i=0;i<GR_DM;i++)
	{
		var e1=[];
		for(var j=0;j<GR_DM;j++)
		{
			e1.push(0);
		}
		if(nodeVal[i]!=0)
		{
			if((nodeVal[i]&8)>0){
				e1[i+GRID_WIDTH]=1;
			}
			if((nodeVal[i]&4)>0){
				e1[i-GRID_WIDTH]=1;
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
	console.log(edge);
	return (Dijkstra(edge,start,end));
}


function Dijkstra(edge,start,end)
{
    var prev=[];
    for(var i=0;i<GR_DM;i++) prev.push(i);
    var visited=[];
    for(var i=0;i<GR_DM;i++) visited.push(0);
    var found=[];
    var u=start;
    visited[u]=1;
    var crt=0;
    found.push(u);
    while(crt<found.length)
    {
	    var idx=found[crt++];
	    for(var i=0;i<GR_DM;i++)
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

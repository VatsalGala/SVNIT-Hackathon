var Car = function( color = 'gray', color2 = 'yellow') {
  this.colorPri = color;
  this.colorSec = color2;
  this.w = 15; // width
  this.h = 15; // height
  this.src = AVAILABLE_NODES[Math.ceil(random(0,AVAILABLE_NODES.length-1))];
  do {
      this.dest = AVAILABLE_NODES[Math.floor(random(0,AVAILABLE_NODES.length))]
    } while(this.dest == this.src);
  this.x = roads[this.src].x;
  this.y = roads[this.src].y;
  this.path = dijkstra(this.src,this.dest);
  this.pathPos = 0;
  this.skips = Math.ceil(random(30,50));
  this.skipsDone = 0;
  this.xinc = (roads[this.path[this.pathPos+1]].x - roads[this.path[this.pathPos]].x)/this.skips;
  this.yinc = (roads[this.path[this.pathPos+1]].y - roads[this.path[this.pathPos]].y)/this.skips;
  this.delay = Math.ceil(random(0,30));
}

function populateCars(){
  var car_Arr = []
  for(var i=0;i<10;i++){
		car_Arr.push(new Car());
	}
  return car_Arr;
}

function updateCar(c){
  if(c.delay > 0){c.delay--;}
  else if(c.path[c.pathPos] == c.dest){

    c.src = c.dest;
    do {
      c.dest = AVAILABLE_NODES[Math.floor(random(0,AVAILABLE_NODES.length))]
    } while(c.dest == c.src);
    reset_c(c);

  }
  else {

    if (c.skipsDone == c.skips) {
      c.pathPos++;
      c.x = roads[c.path[c.pathPos]].x;
      // console.log(":"+c.path[c.pathPos]);
      c.y = roads[c.path[c.pathPos]].y;
      c.skipsDone = 0;

    } else {
      if(roads[c.path[c.pathPos+1]].signal==null || roads[c.path[c.pathPos+1]].signal.state){
        c.x = roads[c.path[c.pathPos]].x + (roads[c.path[c.pathPos+1]].x - roads[c.path[c.pathPos]].x)*c.skipsDone / c.skips;
        c.y = roads[c.path[c.pathPos]].y + (roads[c.path[c.pathPos+1]].y - roads[c.path[c.pathPos]].y)*c.skipsDone / c.skips;
        c.skipsDone++;
      }
      // console.log(roads[c.path[c.pathPos]].x);
    }

  }
}


function reset_c(c){
  c.x = roads[c.src].x;
  c.y = roads[c.src].y;
  c.path = dijkstra(c.src,c.dest);
  c.pathPos = 0;
  c.skipsDone = 0;
  c.xinc = (roads[c.path[c.pathPos+1]].x - roads[c.path[c.pathPos]].x)/c.skips;
  c.yinc = (roads[c.path[c.pathPos+1]].y - roads[c.path[c.pathPos]].y)/c.skips;
}

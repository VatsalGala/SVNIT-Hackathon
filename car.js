var Car = function( color = 'gray', color2 = 'gray') {
  this.colorPri = color;
  this.colorSec = color2;
  this.w = 15; // width
  this.h = 15; // height
  this.src = AVAILABLE_NODES[Math.ceil(random(0,AVAILABLE_NODES.length-1))];
  do {
      this.dest = AVAILABLE_NODES[Math.floor(random(0,AVAILABLE_NODES.length-1))]
    } while(this.dest == this.src);
  this.x = roads[this.src].x;
  this.y = roads[this.src].y;
  this.path = dijkstra(this.src, this.dest);
  this.pathPos = 0;
  this.skips = Math.ceil(random(30,50));
  this.skipsDone = 0;
  console.log(this.src, this.dest, this.pathPos, this.path);
  this.xinc = (roads[this.path[this.pathPos+1]].x - roads[this.path[this.pathPos]].x)/this.skips;
  this.yinc = (roads[this.path[this.pathPos+1]].y - roads[this.path[this.pathPos]].y)/this.skips;
  this.delay = Math.ceil(random(0,30));
  this.emergencyLevel = 0;
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

function updateAmbulance(a){
  if (a.path[a.pathPos] == a.dest){

    var temp = a.dest;
    a.dest = a.src;
    a.src = temp;
    reset_c(a);

  } else {

        if (a.skipsDone == a.skips) {
          a.pathPos++;
          a.x = roads[a.path[a.pathPos]].x;
          a.y = roads[a.path[a.pathPos]].y;
          a.skipsDone = 0;


        } else {
            a.x = roads[a.path[a.pathPos]].x + (roads[a.path[a.pathPos+1]].x - roads[a.path[a.pathPos]].x)*a.skipsDone / a.skips;
            a.y = roads[a.path[a.pathPos]].y + (roads[a.path[a.pathPos+1]].y - roads[a.path[a.pathPos]].y)*a.skipsDone / a.skips;
            a.skipsDone++;
            for(var i=0;i<a.emergencyLevel;i++){
            if(a.pathPos < a.path.length-i && roads[a.path[a.pathPos+i]].signal!=null){
              sig = roads[a.path[a.pathPos+i]].signal;
              sig.currentSwitchTime = sig.switchTime;
              sig.color = 'lightgreen';
              sig.state = true;
            }}
          // console.log(roads[c.path[c.pathPos]].x);
        }

  }
}

function set_src_dest(a, src, dest, emergencyLevel){
  a.src = src;
  a.dest = dest;
  a.h = 20;
  a.w = 20;
  a.emergencyLevel = emergencyLevel;
  a.x = roads[a.src].x;
  a.y = roads[a.src].y;
  a.path = dijkstra(a.src,a.dest);
  a.pathPos = 0;
  a.skipsDone = 0;
  a.xinc = (roads[a.path[a.pathPos+1]].x - roads[a.path[a.pathPos]].x)/a.skips;
  a.yinc = (roads[a.path[a.pathPos+1]].y - roads[a.path[a.pathPos]].y)/a.skips;
}

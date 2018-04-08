function Signal(n){
  this.x = roads[n].x;
  this.y = roads[n].y;
  this.state = Boolean(Math.round(Math.random()));  // 'red' = stop and 'green' = don't stop
  this.color = (this.state)?'lightgreen':'red';
  this.switchTime = Math.ceil(random(2,3)*30);
  this.currentSwitchTime = this.switchTime;
  roads[n].signal = this;
}

function populateSignals(){
  var signalList = selectSignalLocation();
  var signal_Arr = [];
  for (var i=0; i<signalList.length; i++)
    signal_Arr.push(new Signal(signalList[i]));
  return signal_Arr;
}


function selectSignalLocation(){
  var signalNode = []
  for (var i=0;i<AVAILABLE_NODES.length; i++){
    if(nodeVal[AVAILABLE_NODES[i]] == 15||
       nodeVal[AVAILABLE_NODES[i]] == 14||
       nodeVal[AVAILABLE_NODES[i]] == 13||
       nodeVal[AVAILABLE_NODES[i]] == 11||
       nodeVal[AVAILABLE_NODES[i]] == 7){
      signalNode.push(AVAILABLE_NODES[i]);
    }
  }
  var finalList = []
  for (var i=0;i<signalNode.length;i+=2) finalList.push(signalNode[i]);
  return finalList;
}

function updateSignal(s){
  if(s.currentSwitchTime > 0 ) s.currentSwitchTime -- ;
  else {
    s.currentSwitchTime = s.switchTime
    s.state = boolean(s.state^true);
    s.color = (s.state)?'lightgreen':'red';
  }
}

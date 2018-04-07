var CARS = [];
var BLOCKSIZE = 50;

var Driver = function() {
  this.turnRight = function(car) {
    a = {
      top: car.head.left,
      left: car.head.bottom,
      bottom: car.head.right,
      right: car.head.top
    };
    car.head = a;
    this.start(car);
  };
  this.turnLeft = function(car) {
    a = {
      top: car.head.right,
      left: car.head.top,
      bottom: car.head.left,
      right: car.head.bottom
    };
    car.head = a;
    this.start(car);
  };
  this.start = function(car) {
    // starts car if green signal or traffic clears
    // posX, posY, speed changes
    var z = (car.head.top || car.head.left) ? -1 : 1;
    if (car.head.top || car.head.bottom) {
      car.yinc = 50 / 30 * z;
      car.xinc = 0;
    } else {
      car.xinc = 50 / 30 * z;
      car.yinc = 0;
    }
  };
  this.stop = function(car) {
    // stops car if red signal or traffic ahead
    // posX, posY, speed changes
    car.yinc = 0;
    car.xinc = 0;
  };
  this.changeLane = function(car) {
    // changes lane if traffic on particular lane
    // posX, posY changes
    // move in opp direction
  };

  this.chooseDir = function(car) {
    var ran = Math.floor(random(0,4));
    while(!car.avail[Object.keys(car.avail)[ran]]){
      var ran = Math.floor(random(0,4));
    }
    car.head = {top:false,bottom:false,left:false,right:false}
    car.head[Object.keys(car.head)[ran]] = true;
  };

  this.checkAvail = function(car){
    // Ask the roadmap file to check for available directions.
    // Update the car.avail attribute.
  }

}

var Car = function(color = 'gray', posX, posY) {
  this.color = color;
  this.x = posX;
  this.y = posY;
  this.w = 15; // width
  this.h = 40; // height
  this.avail = {
    top: false,
    bottom: false,
    left: false,
    right: false
  };
  this.head = {
    top: false,
    bottom: false,
    left: false,
    right: false
  };
  this.xinc = 0;
  this.yinc = 0;
}

// CARS[0] = new Car('red', 0, 3);

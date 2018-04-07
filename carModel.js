// function drawCar(car){
//   rectMode(CENTER);
//   if(car.head.top){

//     fill(car.colorPri);
//     rect(car.px-12.5, car.py, car.w, car.h);
//     fill(car.colorSec);
//     rect(car.px-12.5, car.py - car.h*3/8, car.w, car.h/4);

//   } else if(car.head.bottom){

//     fill(car.colorPri);
//     rect(car.px+12.5, car.py, car.w, car.h);
//     fill(car.colorSec);
//     rect(car.px+12.5, car.py + car.h*3/8, car.w, car.h/4);

//   } else if (car.head.left){

//     fill(car.colorPri);
//     rect(car.px, car.py+12.5, car.w, car.h);
//     fill(car.colorSec);
//     rect(car.px-car.h*3/8, car.py+12.5, car.w/4, car.h);

//   }else if(car.head.right){

//       fill(car.colorPri);
//       rect(car.px, car.py-12.5, car.w, car.h);
//       fill(car.colorSec);
//       rect(car.px+car.h*3/8, car.py-12.5, car.w/4, car.h);

//     }
// }


function drawCar(car){
  rectMode(CENTER);
  fill(car.colorPri);
  rect(car.x, car.y, car.w, car.h);
}



// function drawAmbulance(car) {
//   rectMode(CENTER);
//   if (car.head.top) {
//     fill("WHITE");
//     rect(car.x - 12.5, car.y, car.w, car.h);
//     fill("BLUE");
//     rect(car.x - 12.5, car.y - car.h * 3 / 8, car.w, car.h / 4);
//   } else if (car.head.bottom) {
//     fill("WHITE");
//     rect(car.x + 12.5, car.y, car.w, car.h);
//     fill("BLUE");
//     rect(car.x + 12.5, car.y + car.h * 3 / 8, car.w, car.h / 4);
//   } else if (car.head.left) {
//     fill("WHITE");
//     rect(car.x, car.y + 12.5, car.w, car.h);
//     fill("BLUE");
//     rect(car.x - car.h * 3 / 8, car.y + 12.5, car.w / 4, car.h);
//   } else if (car.head.right) {
//     fill("WHITE");
//     rect(car.x, car.y - 12.5, car.w, car.h);
//     fill("BLUE");
//     rect(car.x + car.h * 3 / 8, car.y - 12.5, car.w / 4, car.h);
//   }
// }

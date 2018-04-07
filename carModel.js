function drawCar(car){
  rectMode(CENTER);
  if(car.head.top){
    fill("GRAY");
    rect(car.x-12.5, car.y, car.w, car.h);
    fill("YELLOW");
    rect(car.x-12.5, car.y - car.h*3/8, car.w, car.h/4);
  } else if(car.head.bottom){
    fill("GRAY");
    rect(car.x+12.5, car.y, car.w, car.h);
    fill("YELLOW");
    rect(car.x+12.5, car.y + car.h*3/8, car.w, car.h/4);
  } else if (car.head.left){
    fill("GRAY");
    rect(car.x, car.y+12.5, car.w, car.h);
    fill("YELLOW");
    rect(car.x-car.h*3/8, car.y+12.5, car.w/4, car.h);
  }else if(car.head.right){
      fill("GRAY");
      rect(car.x, car.y-12.5, car.w, car.h);
      fill("YELLOW");
      rect(car.x+car.h*3/8, car.y-12.5, car.w/4, car.h);
    }
}

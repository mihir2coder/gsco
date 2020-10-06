var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.velocityX=speed;
  wall=createSprite(1300,200,60,height/2);
  //wall.shapeColor="red"

}

function draw() {
  background(0);
 if (wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;
var deformantion=0.5*weight*speed*speed/22509

if (deformantion>180){
  car.shapeColor=color(255,0,0)
}
if (deformantion<180 && deformantion>100){
car.shapeColor=color(230,230,0)
}

if (deformantion<100){

  car.shapeColor=color(0,255,0);
}
 }

  
  
  
  
  drawSprites();
}
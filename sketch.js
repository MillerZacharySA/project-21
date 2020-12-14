var bullet;
var wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  thickness = random(22,83);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);  

  if(bullet.x+bullet.width >= wall.x){
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage > 10){
      wall.shapeColor = "red";
    } else {
      wall.shapeColor = "green";
    }
  } 

  bullet.collide(wall);

  drawSprites();
}
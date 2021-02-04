var fixedRect,movingRect,c,d;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
   c = createSprite(300,100,30,60);
   d = createSprite(100,150,70,50);
   c.shapeColor = "green"
   d.shapeColor = "green"
   movingRect.velocityY=-5;
   fixedRect.velocityY=5;
   //c.velocity(4);
   //d.velocity(-4)
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(movingRect,d)){
  movingRect.shapeColor="red";
  d.shapeColor="red";
}else{
  d.shapeColor="green";
}
bouceOff(movingRect,fixedRect);
console.log("vertical distance",movingRect.y-fixedRect.y)
  drawSprites();
}

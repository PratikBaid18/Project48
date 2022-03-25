var bgimage,bg
var balloon,balloonImage
var obtop1,obtop2,obbottom1,obbottom2,obbottom3
var obstacletop,obstacleBottom
var point
var obstacleTopgroup,obstacleBottomgroup,pointGroup 
var score=0
function preload(){
 bgimage=loadImage("assets/bg.png");
 balloonImage=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
 obtop1=loadImage("assets/obsTop1.png");
 obtop2=loadImage("assets/obsTop2.png");
 obbottom1=loadImage("assets/obsBottom1.png")
 obbottom2=loadImage("assets/obsBottom2.png")
 obbottom3=loadImage("assets/obsBottom3.png")
}

function setup(){
  createCanvas(400,400)
 bg=createSprite(165,485,1,1)
 bg.addImage(bgimage)
 bg.scale=1.3
 obstacleTopgroup=new Group();
 obstacleBottomgroup=new Group();
 pointGroup=new Group();
 balloon=createSprite(100,200,20,50)
 balloon.addAnimation("balloon",balloonImage)
 balloon.scale=0.2
}

function draw(){
background("white")
if(keyDown("UP_ARROW")){
balloon.velocityY=-4
}
balloon.velocityY=balloon.velocityY+2
sponObstacletop();
spawnObstaclebottom();
Point();
drawSprites();
Score();
if(obstacleTopgroup.isTouching(balloon)||balloon.isTouching(obstacleBottomgroup)){
  text("GAME OVER",350,350)
  obstacleBottomgroup.destroyEach();
  obstacleTopgroup.destroyEach();
  balloon.velocityY=0
  }
}
function sponObstacletop(){
if(frameCount%60===0){
 obstacletop=createSprite(400,50,40,50) 
 obstacletop.velocityX=-4
 obstacletop.scale=0.1
 obstacletop.lifetime=100;
 obstacleTopgroup.add(obstacletop);
 obstacletop.y=Math.round(random(10,100))
 var rand = Math.round(random(1,2));
  switch(rand) { 
  case 1: obstacletop.addImage(obtop1);
  break;
  case 2: obstacletop.addImage(obtop2); 
  break;
  default: break; }
}
}
function spawnObstaclebottom(){
if(frameCount%80===0){
 obstacleBottom=createSprite(400,350,40,50)
 obstacleBottom.velocityX=-4
 obstacleBottom.scale=0.08
 obstacleBottom.lifetime=100;
 obstacleBottomgroup.add(obstacleBottom);
 var rand=Math.round(random(1,3));
 switch(rand){
   case 1:obstacleBottom.addImage(obbottom1);
   break;
   case 2:obstacleBottom.addImage(obbottom2);
   break;
   case 3:obstacleBottom.addImage(obbottom3);
   default: break;}
}
} 
function Point(){
 if(frameCount%100===0){
 point=createSprite(400,200,10,50)
 point.shapeColor="red";
 point.velocityX=-5
 point.lifetime=80;7
 pointGroup.add(point);
 point.y=Math.round(random(10,390));
 
 

 }
}
function Score(){
  if(balloon.isTouching(pointGroup)){
 score=score+1;
 pointGroup.destroyEach();
  }
  text("SCORE:"+score,250,50)
}



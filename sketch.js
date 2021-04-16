
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,400);
  
  ground=createSprite(0,350,1000,15);
  ground.velocityX=-4;
  
  monkey=createSprite(50,320,50,50);
  monkey.addAnimation( "running",monkey_running);
  monkey.scale=0.1;
  
 score = 0;
  
}


function draw() {
background("white"); 
food();
obstacles();
textSize(15);
text("survival time:"+score,100,40)
score = score+Math.round(getFrameRate()/60)
if(keyDown("space") && monkey.y >= 139){
  monkey.velocityY =-9 
} 
monkey.velocityY= monkey.velocityY + 0.8;
monkey.collide(ground);
  
  if(ground.x<0){
   ground.x = ground.width/2;
 } 
  drawSprites();
} 
 function food(){
 if(frameCount%60===0){
  banana=createSprite(560,120,20,20);
  banana.y=Math.round(random(80,120))
  banana.addImage("go  al",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5
  banana.lifetime=200
 }  
 
} 

function obstacles(){
  if(frameCount%50===0){
     obstacle=createSprite(570,330,50,50);
     obstacle.addImage("stop",obstaceImage);
     obstacle.scale=0.1;
     obstacle.velocityX=-5;
     obstacle.lifetime=200;
}
} 

   

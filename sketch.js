var bg;
var bgImage;
var flappyImage;
var bird;
var Obstacle1;
var Obstacle2;
var Obstacle3,Obstacle4,Obstacle5,Obstacle6;
var ObstacleGroup;
var GameState;
var ObstacleGroup1;

var ground;
function preload(){

  bgImage=loadImage("Background2.png");
  flappyImage=loadAnimation("flappy1.png","flappy2.png");
  Obstacle1=loadImage("obstacle1.png");
  Obstacle2=loadImage("obstacle2.png");
  Obstacle3=loadImage("obstacle3.png");
  Obstacle4=loadImage("obstacle4.png");
  Obstacle5=loadImage("obstacle5.png");
  Obstacle6=loadImage("obstacle6.png");
  

}

function setup() {
  createCanvas(windowWidth,windowHeight);
   bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   bg.addImage("background",bgImage);
   bg.x=bg.width/2;
   bg.velocityX=-5;
   bird=createSprite(300,windowHeight/2-100,30,30);
   bird.addAnimation("bird",flappyImage);
   bird.scale=0.3;

   ground= createSprite(windowWidth/2,windowHeight-100,windowWidth,5);

   ground.visible=false;

   ObstacleGroup=new Group(); 
   ObstacleGroup1=new Group();


GameState="Play";   


   
}


function draw() {
  background("green");  

  drawSprites();
  if(GameState==="Play"){
   
    if(bg.x<0){
      bg.x=windowWidth/2;
      
  }
  
  spawnObstacle();
  spawnObstacle1();
   if(keyIsDown(UP_ARROW)||touches.length>0){
   bird.velocityY=-18;
   touches=[];
   }

   bird.velocityY=bird.velocityY+0.8;

   if(ObstacleGroup.isTouching(bird)||(ground.isTouching(bird))){
    
   GameState="End";
   console.log(GameState);
   }
 

  if(ObstacleGroup1.isTouching(bird)||(ground.isTouching(bird))){
    
    GameState="End";
    console.log(GameState);
    }

  }
  
  
 if(GameState==="End"){
  bird.velocityY=0;
 bird.destroy();
 ObstacleGroup.destroyEach();
 ObstacleGroup1.destroyEach();
 textSize(60);
 fill("purple");
 text("GAME OVER",displayWidth/2,displayHeight/2);
 bg.velocityX=0;

  }

  
  
}

function spawnObstacle(){
  if(frameCount%120===0){
   var Obstacle=createSprite(windowWidth,150,60,110);
    Obstacle.velocityX=-5;
    Obstacle.debug=true;
   var rand= Math.round(random(1,3));
   switch(rand){
   case 1:Obstacle.addImage(Obstacle1);break;
   case 2:Obstacle.addImage(Obstacle3);break;
   case 3:Obstacle.addImage(Obstacle4);break;
   default:break;
   }
   ObstacleGroup.add(Obstacle);
  
   }
 

}

function spawnObstacle1(){
  if(frameCount%170===0){
   var Obstacle=createSprite(windowWidth,windowHeight-180,60,110);
    Obstacle.velocityX=-5;

    Obstacle.debug=true;
    
    
    var rand= Math.round(random(1,3));

    switch(rand){
      case 1:Obstacle.addImage(Obstacle2);
      Obstacle.setCollider("rectangle",-50,0,100,200);break;
      case 2:Obstacle.addImage(Obstacle5);
      Obstacle.setCollider("rectangle",-50,0,100,200);break;
      case 3:Obstacle.addImage(Obstacle6);
      Obstacle.setCollider("rectangle",-50,0,100,200);break;
      default:break;
      }
      Obstacle.collide(ground);
      ObstacleGroup1.add(Obstacle); 
      

    }



      

  }
  


  




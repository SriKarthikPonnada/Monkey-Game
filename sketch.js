var monkey , monkey_running,ground1;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime;
var bananas,obstacles

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  ground = createSprite(300,350,600,10)
  monkey = createSprite(100,100,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  monkey.collide(ground)
  ground1 = createSprite(300,190,600,10)
  ground1.visible = false;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  SurvivalTime=0;
  
  

  
}


function draw() {
  background("white")
  bananas()
  obstacles()
  SurvivalTime=Math.ceil(frameCount/frameRate())
  monkey.collide(ground)
  if(keyDown("space")&&monkey.y >=100){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY +0.8
    text("SurvivalTime: "+ SurvivalTime,500,50);
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    FoodGroup.add(banana);
    
  }

  drawSprites();  
}
function bananas(){
  if (frameCount %200=== 0){
  banana = createSprite(600,225,20,20)
 banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-5
    banana.setLifetimeEach=300
    FoodGroup.add(banana);
  }
}
function obstacles(){
  if (frameCount % 300 === 0){
  obstacle = createSprite(600,325,30,30)
 obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
  obstacleGroup.add(obstacle)
  obstacle.velocityX=-5
    obstacleGroup.setLifetimeEach=300
    
  }
}







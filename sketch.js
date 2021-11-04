var car,carEmpty,carFull
var road,roadImg;
var obstacle,garbage;
var obstacle1,obstacle2,obstacle3;
var garbage1,garbage2;
var obstaclesGroup,garbageGroup;

var garbagePickedUp = 0;


function preload(){
  carEmpty = loadImage("car.png");
  carFull = loadImage("car2.png");
  roadImg = loadImage("track.jpg");

  //obstacles
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");

  //garbage
  garbage1 = loadImage("garbage1.png");
  garbage2 = loadImage("garbage2.png");
}

function setup() {
  createCanvas(800,800);

//road
  road= createSprite(420,400,800,800)
  road.addImage(roadImg,"road");
  road.scale=1.1;
  road.velocityY=20;

  //car
  car = createSprite(400,600,10,10)
  car.addImage(carFull,"car");
  car.scale=1.1;

  obstaclesGroup=new Group();
  garbageGroup=new Group();
  
}

function draw() {
  background("blue"); 

 if(keyDown("LEFT_ARROW")){
   car.x=car.x-10;
 }

 if(keyDown("RIGHT_ARROW")){
   car.x=car.x+10;
}

if(road.y>1600){
  road.y=width/2;
}

//car.debug=true;

 SpawnObstacles();
 SpawnGarbage();

 if(garbageGroup.isTouching(car)){
   garbageGroup.destroyEach();
   garbagePickedUp=garbagePickedUp+1
 }
 
  drawSprites();
  textSize(20);
  fill(255);
  text("Garbage_Collected: "+ garbagePickedUp,10,30);
  
}

function SpawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,-50,60,60);
    obstacle.x=Math.round(random(600,10))
    obstacle.velocityY=10;
    obstacle.scale=0.2;
    obstacle.lifetime=120;

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;

      default: break;
    }
    obstaclesGroup.add(obstacle);
  }
} 

function SpawnGarbage(){
  if (frameCount % 60 === 0){
    var garbage = createSprite(400,0,60,60);
    garbage.x=Math.round(random(500,50))
    garbage.velocityY=20;
    garbage.scale=0.10;
    garbage.lifetime=60;

    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: garbage.addImage(garbage1);
              break;
      case 2: garbage.addImage(garbage2);
              break;

      default: break;
    }
    garbageGroup.add(garbage);
  }
} 

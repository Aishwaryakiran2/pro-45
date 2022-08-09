var bg,bgImg;
var player, girlmg, girl_running,floatingilses,isleimg,isle2img;
var clouds,cloudimg;
var ground;
var coin,coinimg;
var boostitem;
var score = 0;
var coinsGroup;

function preload(){
  
  girlmg = loadImage("assets/g1.png");
  girl_running = loadImage("assets/g3.png");

  isleimg = loadImage("assets/isle1.png");
  cloudimg = loadImage("assets/clouds.png");
  coinimg = loadImage("assets/coin.png");


  bgImg = loadImage("assets/background.jpg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2;

// making coin sprite
coin = createSprite(120,50,60,60);
coin.addImage(coinimg);  
coin.scale = 0.3;

// creating a group
coinsGroup = new Group();


ground = createSprite(700,550,1500,20);
ground.visible = false;



//creating the player sprite
player = createSprite(50, displayHeight-300, 50, 50);
 player.addImage(girlmg)
   player.scale = 1.4;
   player.debug = true
   player.setCollider("rectangle",0,0,40,70)


}

function draw() {
  background(0); 



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30;
 }

if(coinsGroup.isTouching(player)){
score+=1;
coinsGroup[0].destroy();

}

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(girl_running)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(girlmg)
}

Spawnislands();
Spawnclouds();
Spawnitem();

drawSprites();
textSize(20);
text("Coin = "+score,20,60);

}

function Spawnislands (){

  if(frameCount %260 === 0 ){
floatingilses = createSprite(width/2+800,400,30,60)
floatingilses.y = Math.round(random(200,400))
floatingilses.addImage(isleimg)
floatingilses.scale = 0.5
floatingilses.velocityX = -3;

  }

  
}

function Spawnclouds (){

  if(frameCount %90 === 0 ){
clouds = createSprite(1200,100,60,60);
clouds.velocityX = -3;
clouds.addImage(cloudimg)
clouds.scale = 0.5

  }

  
  
}
function Spawnitem(){

  if(frameCount %50 ===0 ){
  boostitem = createSprite(800,80,50,50);
  boostitem.x = Math.round(random(100,1000))
  boostitem.velocityY = 3;
  boostitem.addImage(coinimg);  
  boostitem.scale = 0.5;

  // adding sprite in a group
coinsGroup.add(boostitem);

  }

}


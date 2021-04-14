
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Blaze,BlazeImg;
var edges;
var stay1,stay2;
var stay1Img;

function preload()
{
	BlazeImg = loadImage("download.jpg");
    stay1Img = loadImage("grass.jpg");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stay1 = createSprite(300,300,300,5);
	stay1.addImage(stay1Img);

	stay2 = createSprite(600,100,300,5);
	stay2.addImage(stay1Img);

	Blaze = createSprite(1000,500,50,50);
	//Blaze.shapeColor = "RED"
	Blaze.size = 0.1;
	Blaze.addImage(BlazeImg);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


 
if(keyDown(UP_ARROW)){
	Blaze.velocityY =- 2;
}
if(keyDown(DOWN_ARROW)){
	Blaze.velocityy = 2;
}
if(keyDown(RIGHT_ARROW)){
	Blaze.velocityX = 2;
}
if(keyDown(LEFT_ARROW)){
	Blaze.velocityX = -2;
}

edges = createEdgeSprites();
Blaze.bounceOff(edges);
  
  drawSprites();
 
}




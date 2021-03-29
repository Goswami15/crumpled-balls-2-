
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var ground1;
var bin;
var bin2
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	
ball1=new Ball();
ground1=new Ground();

bin=new Bin();
	
  
}


function draw() {
	Engine.update(engine);
 
  background(0);
 
  ball1.display();
  ground1.display();

bin.display();
  

  
 
}

function keyPressed(){
	
  if (keyCode===UP_ARROW){
  
  
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:550,y:-550});
  }
  }


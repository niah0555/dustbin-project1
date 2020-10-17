
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	d1 = new dustbin(650, 670, 200, 20 );
    d2 = new dustbin(750, 640, 20, 100 );
	d3 = new dustbin(550, 640,20, 100 );
	
	ball1 = new ball(200, 500, 10);

	ground1 = new ground(400, 700, 800, 30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  d1.display();
  d2.display();
  d3.display();

  ball1.display();

  ground1.display();
  drawSprites();
 
}
 function keyPressed(){
if(keyCode==32){
Matter.Body.applyForce(ball1.object,ball1.object.position,{x:13,y:-13});

}



 }


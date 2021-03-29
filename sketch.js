
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,rope1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;



function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(250,300);
	bobObject2 = new Bob(300,300);
	bobObject3 = new Bob(350,300);
	bobObject4 = new Bob(400,300);
	bobObject5 = new Bob(450,300);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	

	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2,0);


	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);
	

	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2,0);
	

	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2,0);


	
	roof = new Roof(350,100,300,30);
	


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();

  textSize(20);
  fill(0,0,0);
  text("Press space key to move",230,80);
  
 
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0});
	}
 
 }
 




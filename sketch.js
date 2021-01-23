
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var groundEx;

function setup() {
	createCanvas(1600,700);

	engine = Engine.create();
  world = engine.world;
  bobDiameter=40;

  //Create the Bodies Here.

  roof=new Roof(width/2,height/4,width/7,20);
	
  startX=width/2;
  startY=height/4+500;
	bobObject1 = new Bob(startX-40*2,startY,40);
	bobObject2 = new Bob(startX-40,startY,40);
	bobObject3 = new Bob(startX,startY,40);
	bobObject4 = new Bob(startX+40,startY,40);
  bobObject5 = new Bob(startX+40*2,startY,40);
  
  var render = Render.create({
     element: document.body, 
     engine: engine, 
     options:{ 
       width: 1200, 
       height: 700, 
       wireframes: false } 
      }
  )

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
  rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
  rope3 = new Rope(bobObject3.body,roof.body,0,0);
  rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
  rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);
	
	

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  }
}
function drawLine(constraint){
  bobBodyPosition=constraint.bodyA.position;
  roofBodyPosition=constraint.bodyB.position;
  roofBodyOffset=constraint.pointB;
  roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
  roofBodyY=roofBodyPosition.y+roofBodyOffset.y;
  
  line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}
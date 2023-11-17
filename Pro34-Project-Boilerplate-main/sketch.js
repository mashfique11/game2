
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,rope,ground,block




function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  var ball_properties = {
    restitution:0.95
  }

  ball = Bodies.circle(100,20,50,ball_properties)
  World.add(world,ball)
  ground = Bodies.rectangle(600,500,1200,20,{isStatic:true})
  World.add(world,ground)
  
  block = new Level(100,100,100,10)
  block2 = new Level(windowWidth/2,windowHeight-5,windowWidth+5,15)
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,1200,20)

  block.show()
  block2.show()

  if(keyIsDown(RIGHT_ARROW||W)){
    horizontalRightForce()
  }
  if(keyIsDown(LEFT_ARROW)){
    horizontalLeftForce()
  }
  if(keyIsDown(UP_ARROW)){
    verticalTopForce()
  }
  if(keyIsDown(DOWN_ARROW)){
    verticalBottomForce()
  }
  if(ball.y<=2){
    ball.y=2
  }
  
}

function horizontalRightForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function horizontalLeftForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0})
}

function verticalTopForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function verticalBottomForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}





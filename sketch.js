const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine,ground,ball;

var options={
  isStatic:true
}
var booptions={
  restitution:0.8
}
function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  ground=Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);
ball=Bodies.circle(200,70,30,booptions);
World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill("lime")
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
fill("red");
ellipse(ball.position.x,ball.position.y,20,20);
}





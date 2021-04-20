const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine,world, object,object2;

function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world= engine.world;

var options={
   isStatic: true,
}

 object=Bodies.rectangle(200,380,400,50, options)
 World.add(world,object)

 var options1={
   restitution:1.4
 }
 object2=Bodies.rectangle(200,30,50,50, options1)
 World.add(world,object2)


}

function draw() {
  background("lime");
  
  Engine.update(engine)
  rectMode(CENTER)
 rect(object.position.x,object.position.y,400,50)
 ellipseMode(RADIUS)
ellipse(object2.position.x,object2.position.y,40,55)

}
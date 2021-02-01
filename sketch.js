const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops =100;
var drops;

function preload(){
    
}

function setup(){

    createCanvas(800,900);

	engine = Engine.create();
    world = engine.world;
   
    for(var i =0; i<maxDrops; i++)
    {
        drops.push(new Drop(random(0.400), random(0,400)));
    }

    Engine.run(engine);
    
}

function draw(){

    background(0);
    Engine.update(engine);
    drawSprites();
    drops.display();

}   


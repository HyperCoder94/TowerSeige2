const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,390,900,20);
  stand1 = new Stand(390,300,350,20);
  stand2 = new Stand(700,200,290,20);
 
  //level one
  block1 = new Block(240,250);
  block2 = new Block(290,250);
  block3 = new Block(340,250);
  block4 = new Block(390,250);
  block5 = new Block(440,250);
  block6 = new Block(490,250);
  
  //level two
  block8 = new Block(270,200);
  block9 = new Block(320,200);
  block10 = new Block(370,200);
  block11 = new Block(420,200);
  block12 = new Block(470,200);
  //level three
  block13 = new Block(300,150);
  block14 = new Block(350,150);
  block15 = new Block(400,150);
  //level two  
  block16 = new Block(330,100);
  block17 = new Block(380,100);
  //top 
  block18 = new Block(355,50);

  //set 2 for second stand
  //level one
   blocks1 = new Block(580,150);
   blocks2 = new Block(630,150);
   blocks3 = new Block(680,150);
   blocks4 = new Block(730,150);
   blocks5 = new Block(780,150);
  //level two
  blocks6 = new Block(610,100);
  blocks7 = new Block(660,100);
  blocks8 = new Block(710,100);

  //top
  blocks9 = new Block(660,50);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  block17.display();
  fill("black");
  block18.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();
  //fill("pink")
  
  //fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
//write code for extra chance of the player
  if (keyCode === 32){
    slingShot.attach(this.polygon);
    
  }
}

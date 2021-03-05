
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6;
var world,boy;
var stone,attach;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,175,35);
	mango3=new mango(1250,200,35);
	mango4=new mango(900,250,30);
	mango5=new mango(950,285,35);
	mango6=new mango(1050,75,30);
	
    stone=new Stone(250,330,25)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	 attach=new Throw(stone.body,{x:100,y:465});
	
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(230);
 image(boy ,200,340,200,300);
  
 fill("black");
 textSize(18);

 detectCollision(stone,mango1)
 detectCollision(stone,mango2)
 detectCollision(stone,mango3)
 detectCollision(stone,mango4)
 detectCollision(stone,mango5)
 detectCollision(stone,mango6)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lStone,lMango){
if (lStone.body.position.x - lMango.body.position.x<lMango.diametre+lStone.diametre
	&&lMango.body.position.x -lStone.body.position.x<lMango.diametre+lStone.diametre
	&&lStone.body.position.y-lMango.body.position.y<lMango.diametre+lStone.diametre
	&&lMango.body.position.y-lStone.body.position.y<lMango.diametre+lStone.diametre){
		Matter.body.setStatic(lMango.body,false)
	}
}

function keyPressed(){
	if (keyCode===32){
		Matter.body.setPosition(stone.body,{x:100,y:465})
		attach.Launch(stone.body);
	}
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObj, stoneObj, groundObject, catapultObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var launchingForce=100;
 
function preload(){
    boy=loadImage("boy.png");
}

function setup(){
    createCanvas (1300,600);
    engine = Engine.create();
    world = engine.world;
    
    stoneObj= new stone(235,420,30);
    
    mango1= new mango(1010, 100,30);
    mango2= new mango(1170,130,30);
	mango3= new mango(1010,140,30);
	mango4= new mango(1000,70,30);
    mango5= new mango(1100,70,30);
    mango6= new mango(1000,230,30);
    mango7= new mango(900,230,40);
    mango8= new mango(1140,150,40);
    mango9= new mango(1200,200,40);
    mango10= new mango(900,160,40);
    



    treeObj = new tree(1000,580);
    groundObject = new ground(width/2,600,width,20);
    catapultObject = new Catapult(stoneObj.body,{x:235, y:420});

   var render= Render.create({
       element:document.body,
       engine:engine,
       options:{
           width:1300,
           height: 600,
           wireframes:false
       }
   });
    Engine.run(engine);
}

function draw(){
    background("white");
    textSize(25);
    text("Press space to get a second Chance to Play! !",50,50);
    image(boy ,200,340,200,300)
    //strokeWeight(4);
    
    
    treeObj.display();
    stoneObj.display();
	mango1.display();
    mango2.display();
	mango3.display();
	mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();

    groundObject.display();
    catapultObject.display();
    detectollision(stoneObj,mango1);
    detectollision(stoneObj,mango2);
    detectollision(stoneObj,mango3);
    detectollision(stoneObj,mango4);
    detectollision(stoneObj,mango5);
    detectollision(stoneObj,mango6);
    detectollision(stoneObj,mango7);
    detectollision(stoneObj,mango8);
    detectollision(stoneObj,mango9);
    detectollision(stoneObj,mango10);
   
}

function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased()
{
    catapultObject.fly();
}

function keyPressed(){
    if (keyCode===32){
        Matter.Body.setPosition(stoneObj.body, {x: 235, y: 420})
        catapultObject.attach(stoneObj.body);
    }
}

function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
   {
       Matter.Body.setStatic(lmango.body,false);
   }
}


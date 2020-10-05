var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground1,ground2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(-50, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    packageSprite.velocityX=7;
	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
    helicopterSprite.velocityX=7;
	groundSprite=createSprite(width/2,height-35, 200,20);
	groundSprite.shapeColor=color("red")
	ground1Sprite=createSprite(500, height-35, 20,100);
	ground1Sprite.shapeColor=color("red")
	ground2Sprite=createSprite(300, height-35, 20,100);
	ground2Sprite.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(400, 200 , 5 , {restitution:1.0, isStatic:false});
	packageBody.velocityX=7;
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	ground.shapeColor="red";
 	World.add(world, ground);
	ground1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	ground1.shapeColor="red";
    World.add(world, ground1);
    ground2 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	ground2.shapeColor="red";
	World.add(world, ground2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  packageSprite.velocityX=packageBody.velocityX;
  if(packageBody.x<400&&packageBody.x>350){ 
	packageBody.velocityX=0;
	//packageBody.isStatic :false
	packageBody.velocityY=-7;
  }
  
  drawSprites();
 
}




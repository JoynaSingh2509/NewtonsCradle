const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

function setup(){
  createCanvas(800,500);
  engine=Engine.create();
  world=engine.world;

  ball1=new Ball(170,300,80,80);
  ball2=new Ball(250,300,80,80);
  ball3=new Ball(330,300,80,80);
  ball4=new Ball(410,300,80,80);
  ball5=new Ball(490,300,80,80);
  string1=new String(ball1.body,{x:170,y:150});
  string2=new String(ball2.body,{x:250,y:150});
  string3=new String(ball3.body,{x:330,y:150});
  string4=new String(ball4.body,{x:410,y:150});
  string5=new String(ball5.body,{x:490,y:150});
  console.log(mouseY)
}

function draw(){
    background(0);
    Engine.update(engine);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    string1.display();
    string2.display();
    string3.display()
    string4.display()
    string5.display()

}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
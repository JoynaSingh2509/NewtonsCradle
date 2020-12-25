class Ball{
    constructor(x,y,w,h,angle){
        var options={
            isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill(0);
        strokeWeight(2)
        stroke(255)
        ellipse(0,0,this.width,this.height);
        pop()
    }
}
class Bin {
    constructor(){
      var  options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(1050,180,130,152,options);
        this.width1=130;
        this.height1=152;
        this.image=loadImage("sprites/dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       
        push();
        
        imageMode(CENTER);
image(this.image,pos.x,pos.y,this.width1,this.height1);
pop();
    }
}

class Ground{
    constructor(){
        var options={
            isStatic:true,
        };

        this.body=Bodies.rectangle(0,280,1200,10,options);
        this.width=1200;
        this.height=10
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill("yellow");
rect(pos.x,pos.y,this.width,this.height);
pop();
    }
}
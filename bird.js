class bird{
    constructor(x,y){
        var options={friction:0.3,
        density:0.3,
    restitution:0.5}
    
    this.body=Matter.Bodies.rectangle(x,y,50,50)
    Matter.World.add(world,this.body)
}
display(){
    push()
    this.body.position.x=mouseX
    this.body.position.y=mouseY
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("red")
    rectMode(CENTER)
    rect(0,0,50,50)
    pop();
}
}
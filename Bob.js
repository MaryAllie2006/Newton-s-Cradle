class Bob {
  constructor(x, y, r) {
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':0.8
    }
    
    this.r=r;
    this.y=y;
    this.x=x
    this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
    World.add(world, this.body);
  }
  display(){
        var paperpos =this.body.position;

        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        fill("pink");
        ellipse(0,0,this.r,this.r);
        pop();
         
      }
}
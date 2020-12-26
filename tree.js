class tree {
    constructor(x, y,options){
      var options = {
        isStatic:true
      }
     this.x=x;
     this.y=y;
     this.dustbinWidth=450;
     this.dustbinHeight=600;
     this.wallThickness=10;
    
     this.image = loadImage("tree.png");
     this.bottomBody=Bodies.rectangle(this.x,this.y, this.dustbinWidth,  this.wallThickness,{isStactic:false})
     this.leftWallBody=Bodies.rectangle(0,this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,{isStactic:false})
     this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,{isStactic:false})
    
     World.add(world, this.bottomBody)
     World.add(world, this.leftWallBody)
     World.add(world, this.rightWallBody);
    }
   display(){
    var posBottom = this.bottomBody.position;
    push();
    translate( posBottom.x,  posBottom.y+10);
    fill(255)
    imageMode(CENTER);
    image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
    pop();
  }
}
  
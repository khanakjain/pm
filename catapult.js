class Catapult{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB:anchor,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA=body,
        this.pointB=anchor,
        
        this.catapult = Constraint.create(options)
        World.add(world, this.catapult)
    }
    attach(body){
        this.catapult.bodyA = body;
    }
    
    fly(){
        this.catapult.bodyA = null;
    }

    display(){
        
        if(this.catapult.bodyA)
        {
            var pointA = this.bodyA.position;
            var pointB = this.pointB
            
            
            strokeWeight(2);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
           
        
        }
    }
    
}
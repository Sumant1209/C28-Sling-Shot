class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length:15,
            stiffness: 0.04
        }
        this.sling = Constraint.create(options)
        World.add(world, this.sling)
        this.pointB = pointB
    }
    display(){
        if(this.sling.bodyA != null){
            var posA = this.sling.bodyA.position
            var posB = this.pointB
            strokeWeight(3);
            line(posA.x, posA.y, posB.x, posB.y);
        }
    }
    fly(){
        this.sling.bodyA = null
    }
}
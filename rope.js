class Rope{

    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var op = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.rope = Matter.Constraint.create(op);
        World.add(world,this.rope);
    }

    display(){

        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);

        var hook1x = point1.x;
        var hook1y = point1.y;

        var hook2x = point2.x + this.offsetX;
        var hook2y = point2.y + this.offsetY;

        line(hook1x,hook1y,hook2x,hook2y);
    }
}
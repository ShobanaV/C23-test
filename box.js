class Box {    

    constructor(x,y,width,height) {
        var options = {
            'restitution' : 0.8,
            'friction' : 0.3,
            'density' : 1
        
        };
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        //console.log(this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        //console.log(pos.x, pos.y, angle);
        console.log(angle);
        //translate(pos.x, pos.y);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //fill(255);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}
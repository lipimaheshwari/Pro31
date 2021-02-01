class Drop{
    constructor(x,y)
    {
        this.x =x;
        this.y =y;
        this.body = Bodies.circle(this.x,this.y,40);
    }

    display()
    {
        var pos= this.body.position;
        push()
        translate(pos.x,pos.y);
        fill("blue");
        ellipse(100,100,10,10);
        pop()


    }
}

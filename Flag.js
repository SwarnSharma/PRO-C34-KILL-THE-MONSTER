class Flag {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
      }
      this.image=loadImage("flag.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER)
      imageMode(CENTER);
	    image(this.image, 0, 0, 80, 90 )
      pop();
    }
  }
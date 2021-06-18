class Block{
  constructor(x, y) {
      var options = {
          restitution :0.4,
          friction :0.0,
          density :5,
        
      }
      this.image = loadImage("block.png");
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed < 3){
        var pos= this.body.position;
        var angle= this.body.angle;
      //rectMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
        push();
        translate(pos.x, pos.y);
        rotate(angle);

     
      //tint(225,this.visibility);
      image(this.image,0,0,this.width,this.height);
      pop();
        
      }
      else {
       
        World.remove(world, this.body);
        push(); 
        this.visibility= this.visibility-5;
         pop();
      }
    }
}







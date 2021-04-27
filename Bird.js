class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trigectory=[]
    this.smoke= loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>220){
      var position=[this.body.position.x,this.body.position.y]
      this.trigectory.push(position)
    }
    for(var i=0;i<this.trigectory.length;i=i+1){
      image (this.smoke,this.trigectory[i][0],this.trigectory[i][1])
    }
  }
}

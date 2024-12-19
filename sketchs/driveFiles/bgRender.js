class bgRenderer{
  
 constructor(xPos,yPos,scene){
   this.x = xPos;
   this.y = yPos;
   this.scene = scene;
    
  }
  update(){
    
  }
  static moveBackground(x){
    this.xPos += ((x/3)*2);
  }
  display(){
    push()
  imageMode(CENTER)
  image(bgImageNight,this.x,this.y)
  pop()
  }
  transition(){
    
  }
  
}
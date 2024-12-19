// this is really not useful anymore but it does provide some insight into how the 3d projection works on more visible code
class fgRenderer{
  
 constructor(xPos,yPos,scene){
   this.x = xPos;
   this.y = yPos;
   this.horizon = 200;
   this.roadWidth = 200;
   this.scene = scene;
   this.currentWidth = 150;
   this.offsetX = 200;
   this.segments = [];
  }
  drawRoad(){
    
    //uses our tangent equation to get where each line should be drawn
    for(let n=0; n< roadSegments; n++)
    {
    this.segments[n] = SCREEN_HEIGHT_SCALE * ((n * segmentLength * povY)/povZ)/(1+(n*segmentLength));
    }
    
  // arbitray line renderer likely to be deleted
for(let n=0; n< roadSegments; n++){
  stroke("#000")
  strokeWeight(1);
  line(0,SCREEN_HEIGHT - this.segments[n], SCREEN_WIDTH,SCREEN_HEIGHT - this.segments[n])
}

  }
  
  update(){
    
  }
  static moveBackground(x){
    this.xPos += ((x/3)*2);
  }
  display(){
    push()
  imageMode(CENTER)
  image(outRunFG,this.x,this.y)
  pop()
  }
  transition(){
    
  }
  
}
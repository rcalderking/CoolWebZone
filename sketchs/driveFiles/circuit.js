class circuit{
  constructor(segmentSize, roadWidth, segmentAmount){
    //this.scene = scene;
    this.segments = []
    this.segSize = segmentSize;
    this.rWidth = roadWidth;
    this.graphics = createGraphics(0,0);
    this.roadLength = null;
    this.total_segments = null;
    this.visible_segments = 200;
    this.rumble_segments = 5;
    this.roadLanes = 3;
  }
  
  
  create(){
    this.segments = [];
    
    this.createRoad();
    
    this.total_segments = this.segments.length;
    
    this.roadLength = this.total_segments * this.segSize;
  }
  
  
  createRoad(){
    this.createSection(1000);
  }
  createSection(nSegmenets){
    for(let i = 0; i<nSegmenets; i++)
    {
      this.createSegment();
    }
  }
  
  
  createSegment(){
    let n = this.segments.length;
    
    this.segments.push({
      index: n,
      //creates our segments on a flat plane
      point:{
        world: {x: 0, y: 0, z: n*this.segSize},
        screen: {x: 0, y: 0, w:0},
        scale: -1
      },
      //this using the rumble segments is arbitrary, but it essentially guides the color rotation
      segmentColor: floor(n/this.rumble_segments) %2 ? gameColors.DARK : gameColors.LIGHT
    });   
  }
  
  
  
getSegment(positionZ)
  {
    if(positionZ<0) 
    {
      positionZ += this.roadLength;
    }
    var index = (floor(positionZ / this.segSize) %  this.total_segments);
    return this.segments[index];
  }
  //research this
  
  //okay so I think this means that the screen point x is in the cetner, the y is in the height minus the z depth we determined in the above funtion.
  project3D(point, cameraX, cameraY, cameraZ, cameraDepth){
    
    //world coords to camera coords still iffy on this
    var transX = point.world.x - cameraX;
    var transY = point.world.y - cameraY;
    var transZ = point.world.z - cameraZ;
    
    //scaling factor based on the law of similiar traingles, explained in fg renderer
    point.scale =cameraDepth/transZ;
    
    //projecting camera coords onto normalized projection plane
    var projectedX = point.scale * transX;
    var projectedY = point.scale * transY;
    var projectedW = point.scale * this.rWidth;
    
    point.screen.x = round((1 + projectedX) * SCREEN_CX);
    point.screen.y = round((1 + projectedY) * SCREEN_CY);
    point.screen.w = round(projectedW * SCREEN_CX);
  }
  
  render3D(){
    this.graphics.clear();
    //stops our render from taking over the whole screen
    var clipBottomLine = SCREEN_HEIGHT;
    
    var coolCam = coolCamera;
    
    var baseSegment = this.getSegment(coolCam.z);
    var baseIndex = baseSegment.index;
    
    for (var n=0; n<this.visible_segments; n++)
    {
      var currIndex = ((baseIndex + n) % this.total_segments);
      var currSegment = this.segments[currIndex];
      
      //get the camera offset for a loop
      var offsetZ = (currIndex < baseIndex) ? this.roadLength : 0;
 //project segment on the screen    
      this.project3D(currSegment.point,coolCam.x,coolCam.y,coolCam.z-offsetZ,coolCam.distToPlane);
// draw this segment only if it above the clipping line
      var currBottomLine = currSegment.point.screen.y;
      
        if(n>0 && currBottomLine < clipBottomLine)
        {
          var prevIndex = (currIndex>0) ? currIndex-1 : this.total_segments-1;
          var prevSegment = this.segments[prevIndex];
      
          var p1 = prevSegment.point.screen;
          var p2 = currSegment.point.screen;
    
    
          this.drawSegment(
          p1.x, p1.y, p1.w,
          p2.x, p2.y, p2.w,
          currSegment.segmentColor
          );
          
          //move the clip line up
          clipBottomLine = currBottomLine;
        }
      }
  }
  
  //draws each singular horizontal 'strip'
drawSegment(x1,y1,w1,x2,y2,w2, colory){
  push()
  noStroke();
  fill(colory.grass);
  rect(0,y2, SCREEN_WIDTH, y1-y2);
  pop();
  
    this.drawPolygon(x1-w1,y1,x1+w1,y1,x2+w2,y2,x2-w2,y2, colory.road);
  
  var rumble_w1 = w1/5;
  var rumble_w2 = w2/5;
  this.drawPolygon(x1-w1-rumble_w1,y1,x1-w1,y1,x2-w2,y2,x2-w2-rumble_w2,y2, colory.rumble);
    this.drawPolygon(x1+w1+rumble_w1,y1,x1+w1,y1,x2+w2,y2,x2+w2+rumble_w2,y2, colory.rumble);
  //lane lines
  if(colory.lane){
    var line_w1 = (w1/20) /2;
    var line_w2 = (w2/20) /2;
    
    var lane_w1 = (w1*2) / this.roadLanes;
    var lane_w2 = (w2*2) / this.roadLanes;
    
    var lane_x1 = x1-w1;
    var lane_x2 = x2 - w2;
    
    for(var i = 1; i<this.roadLanes; i++){
      lane_x1 += lane_w1;
      lane_x2 += lane_w2;
      
      this.drawPolygon(lane_x1-line_w1,y1,
                       lane_x1+line_w1, y1,
                       lane_x2+line_w2,y2, 
                       lane_x2-line_w2, y2,
                       colory.lane);
    }
  }
  }
  
  //had to adapt this from the turotial to p5 but it works!
  drawPolygon(x1,y1,x2,y2,x3,y3,x4,y4,colory){
    this.graphics.rect(0,y2,SCREEN_WIDTH, y1-y2);
    push();
    beginShape();
    fill(colory);
    noStroke();
    vertex(x1,y1);
    vertex(x2,y2);
    vertex(x3,y3);
    vertex(x4,y4);
    endShape(CLOSE)
    pop();
  }
  
}
class Camera{
  constructor(){
    this.x = 0;
    this.y = -1000;
    this.z = 0;
    
    this.distToPlane = null;
    
    this.distToPlayer = 300;
  }
  
  init(){
    this.distToPlane = -1/ (this.y/this.distToPlayer);
  }
  update(){
    var circuit = newCircuit;
    var player = playerCar;
    this.x = player.xPos * circuit.rWidth;
    console.log(this.x);
    this.z = player.zPos -this.distToPlayer;
    
    if (this.z<0){
      this.z += circuit.roadLength;
    }
  }
}
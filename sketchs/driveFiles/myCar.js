
class myCar{
  constructor(x,y,sprite,condition){
    this.circuit = newCircuit;
    this.xPos = x;
    this.yPos = y;
    this.zPos = 0;
    this.carSprite = sprite;
    this.playerState = condition;
    this.speed = 0;
    this.maxSpeed = 20;
    this.accelTurnRate = 0.0005;
    this.carAccelRate = 0.005;
    this.carSpeed = 0;
    this.currentSide = false;
  }
  restart(){
        var circuit = newCircuit;
    this.xPos=0;
    this.yPos=0;
    this.zPos=0;
    this.maxSpeed = (circuit.segSize)/(1/60);
    this.speed = this.maxSpeed;
    
  }
  update(dt){
        var circuit = newCircuit;
    this.zPos += this.speed * dt;
    if(this.zPos >= circuit.roadLength){
      this.zPos -= circuit.roadLength
    }
    //slow down in offroad
    if ((coolCamera.x > -1600 && coolCamera.x <-1000)||(coolCamera.x > 1000 && coolCamera.x < 1600)){
      if(this.speed > 1000){
        this.speed -=500;
      }
    }
    
  }
  display(){
    push()
     imageMode(CENTER);
      translate(this.xPos + 200, this.yPos + 350)
    if (this.currentSide === false){
      image(this.carSprite,this.xPos,0)
    }
    else if (this.currentSide === true){
    //scale(-1, 1);
    image(this.carSprite,this.xPos,0);
    }
    pop()
    }
    
  keyListener(){
    var camera = coolCamera;
    if (keyIsDown (86) && coolCamera.x > -1000 && coolCamera.x < 1000){
        if(this.speed < this.maxSpeed){
      this.speed += 10;
    }
        }
    //off road
      else if(keyIsDown (86) && ((coolCamera.x > -1600 && coolCamera.x <-1000)||(coolCamera.x > 1000 && coolCamera.x < 1600))){
      if(this.speed < (this.maxSpeed-2000)){
      this.speed += 2;
      }
      }
    else if (keyIsDown(66)){
            if (this.speed >= 0){
      this.speed -= 80;
      }
    }
    else{
      if (this.speed > 0){
      this.speed -= 10;
      }
    }
    if (keyIsDown (LEFT_ARROW)){
      this.carSprite = this.carSprite = carTurnI;
      this.currentSide = true;
      if (coolCamera.x > -1500){
      if(this.accelTurnRate <= 0.1){
        this.accelTurnRate += 0.005;
      }
        this.xPos -= (this.accelTurnRate *(this.speed/4500));
      }
      roadEndXPos += this.accelTurnRate;
      bgRender.x += ((this.accelTurnRate)*10);
    }
    else if (keyIsDown (RIGHT_ARROW)){
      this.carSprite = this.carSprite = carTurn;
      this.currentSide = false;
      if (coolCamera.x < 1500){
            if(this.accelTurnRate <= 0.1){
        this.accelTurnRate += 0.005;
      }
         this.xPos += (this.accelTurnRate *(this.speed/4500));
      }
      roadEndXPos -= this.accelTurnRate;
      bgRender.x -= ((this.accelTurnRate)*10);
      
    }  
    else{
      this.carSprite = this.carSprite = carNuetral;
      this.accelTurnRate = 0;
      
    }  
    
    if (keyIsDown (88)){
      if (this.carSpeed <= 5)
        {
          this.carSpeed += this.carAccelRate;
        }
    }

    
  }
}
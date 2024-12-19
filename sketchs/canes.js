
let hurricanes = [];
let hurricane1Spawn = false;
let hurricane2Spawn = false;
let hurricane3Spawn = false;
let hurricane4Spawn = false;
let startSpawn2 = true;
let startSpawn3 = true;
let startSpawn4 = true;
let interval = 8000;
let previousTime = 0;
function setup() {
createCanvas(400, 400);
    
}

function draw() {
  let timerGuy = millis();
  //depricated spawner
  // if (startSeconds2 <= timerGuy && startSpawn2 == true)
  // {
  //   hurricaneSpawn2 = false;
  //     startSpawn2 = false;
  // }   
  //   if (startSeconds3 <= timerGuy && startSpawn3 == true){
  //   hurricaneSpawn3 = false;
  //     startSpawn3 = false;
  //   }   
  //   if (startSeconds4 <= timerGuy && startSpawn4 == true){
  //   hurricaneSpawn4 = false;
  //     startSpawn4 = false;   
  // }
  //based on millis, i know, but creates hurricanes on random but contained times
  if (timerGuy - previousTime >= interval){
  hurricanes.push(new hurricane());
  previousTime=timerGuy;
  interval = random(8000,15000)
  }
  
  
  //keeping this in as i may need it as research to despawn hurricanes
  if(hurricane1Spawn == false){
  hurricane1 = new hurricane();
  hurricane1Spawn = true; 
  }
  
  if(hurricane2Spawn == false){
   hurricane2 = new hurricane();
  hurricane2Spawn = true; 
  }
  if(hurricane3Spawn == false){
   hurricane3 = new hurricane();
  hurricane3Spawn = true; 
  }
  if(hurricane4Spawn == false){
   hurricane4 = new hurricane();
  hurricane4Spawn = true; 
  }
  
  
  
    background(220);
  
  //hurricane1 initial guy
  if(hurricane1Spawn == true){
  hurricane1.show();
  hurricane1.move();  //hurricane2
  }

  //depricated display method for hurricanes
//     if(hurricane2Spawn == true && startSpawn2 == false){
//       hurricane2.show();
//       hurricane2.move();
//   }
  
//     if(hurricane3Spawn == true && startSpawn3 == false){
//       hurricane3.show();
//       hurricane3.move();
//   }
  
//     if(hurricane4Spawn == true && startSpawn4 == false){
//       hurricane4.show();
//       hurricane4.move();
//   }
    for (let i = 0; i < hurricanes.length; i += 1) {
    // Update the element at index i.
      hurricanes[i].show();
      hurricanes[i].move();
  }

    push()
  fill(255,144,0);
  circle(mouseX,mouseY,30)
  pop();
  
}


//huricane maker
class hurricane{
  constructor(x,y,r = 5){
    this.x = random(200,400);
    this.y = random(200,400);
    this.r = r;
    this.Red = random(0,255);
    this.Green = random(0,255);
    this.Blue = random(0,255);
    this.brightness = 0;
    this.speedH = random(0.001,0.005);
    this.angle1 = 0;
  }
  intersect(other){
    
  }
  changeColor(bright){
    this.brightness = bright;
  }
  
  move(){
    let hurricaneSpeed = deltaTime *this.speedH;
    this.angle1 += hurricaneSpeed;
  }
  
  show(){
    push()
    translate(this.x,this.y)
    stroke(255);
    strokeWeight(1);
    rotate(this.angle1)
    fill(this.Red,this.Blue,this.Green)
    circle(10+ this.angle1,0,(this.r*2+this.angle1))
    pop()
  }
}
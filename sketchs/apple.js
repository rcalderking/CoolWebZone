let x = 0;
let go = 0;
let yo = 0;
let speed = 0.05;
let speed2 = 1;
let popOff = false;
let circleShrinker = 80;
let reder = 10;
let bluer = 40;
let ySpawn = 1;
let particleOver = true;
let firstCheckIn = true;
let shooterX;
let shooterY;

function preload(){
  imgSmall = loadImage('./sketchs/sketchMedia/apple/lilfell.png');
  imgBig = loadImage('./sketchs/sketchMedia/apple/bigfell.png');
  imgBit = loadImage('./sketchs/sketchMedia/apple/bitfell.png');
  imgBit2 = loadImage('./sketchs/sketchMedia/apple/bitfella2.png');
  imgBit3 = loadImage('./sketchs/sketchMedia/apple/bitfella3.png');
  imgBit4 = loadImage('./sketchs/sketchMedia/apple/bitfella4.png');
  imgAppleBg = loadImage('./sketchs/sketchMedia/apple/applejs.png');
}

function setup() {
  imageMode(CENTER);
  ellipseMode(CENTER);
  createCanvas(400, 400);
}

function draw() {
  if (particleOver == true){
    popOff = false;
    firstCheckIn = true;
    circleShrinker = 80;
  }
  //bg sillyness
  //motion
  let xgoodbye = speed * deltaTime;
  //motion for appleBG
  yo += xgoodbye;
  if (yo >=200){
    yo=0;
  }
  
  image(imgAppleBg,300+yo,200)
   image(imgAppleBg,200+yo,200)
     image(imgAppleBg,100+yo,200)
       image(imgAppleBg,yo,200)
  
  //overlaySillyness
    let ygoodbye = speed2 * deltaTime;
    go += ygoodbye;
  if (go >=400){
      ySpawn = random(1,6);
    go=0;
  }


  //change over time


  
  //apple shrinker and the starts of some particle code
  if((mouseX >= 165 && mouseX <= 235 )&&(mouseY >= 165 && mouseY <= 235)){
  image(imgSmall, mouseX, mouseY);
    if(popOff == false){
    shootParticles(mouseX,mouseY);
                  // popOff = true;
    }
  }
  else if(
((mouseX >= 35 && mouseX < 65)||(mouseX >= 335 && mouseX < 365))||((mouseY >= 35 && mouseY < 65)||(mouseY > 335 && mouseY <= 365))
){
    image(imgBit, mouseX, mouseY);
    if(popOff == false){
    shootParticles();
    // popOff = true;
    }
  }
    else if(
((mouseX >= 65 && mouseX < 100) || (mouseX >= 300 && mouseX < 335))||((mouseY >= 65 && mouseY < 100)||(mouseY > 300 && mouseY <= 335))
){
    image(imgBit2, mouseX, mouseY);
    if(popOff == false){
    shootParticles();
    // popOff = true;
    }
  }
      else if(
((mouseX >= 100 && mouseX <135) || (mouseX >= 265 && mouseX < 300))||((mouseY >= 100 && mouseY < 135)||(mouseY > 265 && mouseY <= 300))
){
    image(imgBit3, mouseX, mouseY);
    if(popOff == false){
    shootParticles();
    // popOff = true;
    }
  }
        else if(
((mouseX >= 135 && mouseX <165) || (mouseX >= 235 && mouseX < 265))||((mouseY >= 135 && mouseY < 165)||(mouseY > 235 && mouseY <= 265))
){
    image(imgBit4, mouseX, mouseY);
    if(popOff == false){
    shootParticles();
    popOff = true;
    }
  }
  else{
    image(imgBig, mouseX, mouseY);
  }
  //circle shooter
      push()
  blendMode(EXCLUSION);
  fill(reder+yo,bluer,0);
  circle(go,(100*ySpawn),300)
pop()
}
//circle color changer
function mousePressed(){
  reder = random(0,210);
   bluer = random(0,210);
  console.log(popOff)
}
//a big mess that almost works
function shootParticles()
{
 if(firstCheckIn ==true){ //applechunks
  Particle1x = random(1,-1)
  Particle1y = random(1,-1)
   firstCheckIn = false;
   popOff = true;
 }
  shooterX = mouseX*Particle1x;
   shooterY = mouseY*Particle1y;
  //okayNowShoot(shooterX,shooterY)
}
function okayNowShoot(starterX, starterY){
  while(popOff === true){
    particleOver=false;
    push();
      fill(255,202,107);
     circle(starterX+go,starterY+go,circleShrinker);

    console.log(circleShrinker); 
    pop();
    if(circleShrinker > 0){
         circleShrinker -= .5;
    }
    if (circleShrinker <= 0)
     {
       popOff = false;
         particleOver = true;
         console.log(popOff);

     }
    }  

}


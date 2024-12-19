
let redFader = 220;
function setup() {
  ellipseMode(CENTER);
  createCanvas(400, 400);
}

function draw() {
  let clownOrange = color(redFader,60,5);
   let bed = color(245, 184, 239);
  
  
  //initial clown coloring
  noStroke();
  fill(clownOrange);
  circle(0,200,400);
  
  fill(215);
  circle(100,200,400);
  
  fill(240,80,25);
  circle(200,200,400);
  
  fill(215);
  circle(300,200,400);
  
  fill(clownOrange);
  circle(400,200,400);
  
  fill(215);
  circle(500,200,400);
  
  //now background stuff
  
  fill(bed);
  circle(100,120,150);
  circle(100,330,150);
  circle(0,225,150);
  rect(0,0,400,170);
  rect(0,270,400,170);
  rect(300,0,100,400)
  //top sheet, pillows, etc
  fill(252, 210, 248)
  rect(0,0,400,125)
  fill(255, 194, 249)
  rect(-10,75,420,75,25)
  fill(250, 225, 248)
  rect(0,-20,175,95,25)
  rect(200,-20,175,95,25)
  
  
  //dorsal
    fill(240,80,25)
  rect(190, 135, 75, 50, 50);
  //body
    fill(clownOrange);
  ellipse(205,222,180,125);
  fill(255);
  ellipse(230,223,155,130);
  
  //fins
  
  fill(215);
  rect(300, 225, 55, 50, 20);
  fill(240,80,25)
  rect(180, 225, 55, 50, 20);
  
  //backtailends
fill(240,80,25)
  circle(75,190,25)
  fill(240,80,25)
  circle(75,260,25)
  //face
  
  //eye1
  fill(0);
  ellipse(330,200,40,45);
  fill(255);
  ellipse(340,190,10,15);
  circle(345,200,5);
  //face main
  fill(clownOrange);
  ellipse(275,225,125,150);
  //eye2
  fill(0);
  ellipse(270,200,40,45);
  fill(255);
  ellipse(280,190,10,15);
    circle(275,200,5);
  //mouth
  fill(0);
  arc(300, 260, 30, 30, 0, PI + QUARTER_PI, CHORD)
  //face over
 
  oscillate(redFader, 200,240);
  //secret fading code
   for (let i=0; i<5; i++){
     redFader = redFader - 0.25;
     return;
   }
  
  
}
function oscillate(input, min, max){
  var range = max - min;
  return min + Math.abs(((input + range) % (range * 2)) - range);
}

let pantsSwap = 1;
let headSwap = 1;
let bodySwap  = 1;
function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
  //head
          rect(0,0,400,200)
    rect(0,200,400,200)
        rect(0,400,400,200)
    if (pantsSwap >= 3){
    pantsSwap =1}
  
    if (headSwap >= 3){
    headSwap =1}
  
    if (bodySwap >= 3){
    bodySwap =1}
head();

body();
  //leg
  pants();
}
function pants(){
  if(pantsSwap ==1){
    push()
    fill(132,57,5)
    rect(170,560,10,30)
      triangle(110,590,160,590,175,560)
  
      rect(235,560,10,30)
      triangle(255,590,290,590,235,560)
  pop()
  
  push()
  fill(0,245,255)
    fill(0,122,255)
        beginShape();
  vertex(200,440);
  bezierVertex(228,450,228,480,240,550);
bezierVertex(288,450,288,480,260,400);
  bezierVertex(138,400,138,400,140,400);
    bezierVertex(138,400,118,550,180,550);
      bezierVertex(180,450,180,460,200,440);
  endShape(CLOSE);
  pop()
    push()
  fill(0,245,255)
        beginShape();
  vertex(137,480);
      bezierVertex(130,590,100,580,150,580);
        bezierVertex(180,580,200,570,180,520);
  endShape(CLOSE);
          beginShape();
  vertex(273,480);
      bezierVertex(270,590,300,580,240,580);
        bezierVertex(230,580,220,570,240,520);
  endShape(CLOSE);
  pop()
  }
  else if (pantsSwap ==2){
    //legs
  push()
    noStroke();
    translate(100,480);
    rotate(200);
    fill(232, 161, 93);
    rect(0,0,80,30);
  pop()
  
  push()
    noStroke()
    translate(270,400);
    rotate(-200);
    fill(232, 161, 93);
    rect(0,0,80,30);
  pop()
  
  push()
    noStroke()
    translate(125,465);
    rotate(45);
    fill(232, 161, 93);
    rect(0,0,80,30);
  pop()
  
  push()
    noStroke()
    translate(240,525);
    rotate(-45);
    fill(232, 161, 93);
    rect(0,0,80,30);
  pop()
  }
}
function body(){
  if(bodySwap == 1){  //body
  push()
  noStroke()
  fill(255,196,164)
  circle(270,220,100)
    circle(130,220,100)
  ellipseMode(CENTER)
ellipse(110,280,40,90)
  ellipse(290,280,40,90)
    beginShape();
  vertex(180,220);
  bezierVertex(28,320,28,290,80,210); 
  endShape(CLOSE);
      beginShape();
  vertex(220,220);
  bezierVertex(378,320,378,290,320,210); 
  endShape(CLOSE);
  pop()
  
  //arms
  push()
    noStroke()
   fill(164,209,255)
  rect(120,200,30,140)
    rect(250,200,30,140)
  pop()
  
  //torso
  push()
  rectMode(CENTER)
      noStroke()
   fill(255,163,224)
  rect(200,300,120,200)
    rect(135,320,40,10)
      rect(265,320,40,10)
  pop()
  
  //sun
  push()
  noStroke()
  ellipseMode(CENTER);
     fill(242,123,40)
  circle(200,260,70)
       triangle(195,300,205,300,200,310)
       triangle(195,220,205,220,200,210)
       
       triangle(160,250,160,270,150,260)
         triangle(240,250,240,270,250,260)
  
         triangle(170,235,180,225,170,220)
         triangle(230,235,220,225,235,220)
           triangle(170,285,180,295,170,300)
         triangle(230,285,220,295,235,300)
  pop()
  }
  else if (bodySwap == 2){
    //body
  push()
   noStroke()
   fill(225,225,225)
   ellipse(200,350,180,180)
  pop()
  
  push()
   noStroke();
   fill(225,225,225);
   translate(250,270);
   rotate(50);
   ellipse(0,0,60,180);
  pop()
  
  push()
   noStroke();
   fill(225,225,225);
   translate(150,270);
   rotate(-50);
   ellipse(0,0,60,180);
  pop()
  
  push()
   noStroke();
   fill(225,225,225);
   rect(170,180,60,180);
  pop()
  
  //arms
  push()
   noStroke()
   fill(225,225,225)
   translate(70,240)
   rotate(QUARTER_PI)
   ellipse(0,0,40,180)
  pop()
  
  push()
   noStroke()
   fill(225,225,225)
   translate(330,240)
   rotate(-QUARTER_PI)
   ellipse(0,0,40,180)
  pop()
  }
}
function head(){

  if(headSwap == 1){
  circle(200,150,100)

    rect(170,125,3,30,5)
  rect(230,125,3,30,5)
  
  triangle(140,160,140,120,30,140)
    triangle(260,160,260,120,370,140)
  
    triangle(190,90,210,90,200,30)
     triangle(190,180,210,180,200,190)
  }
  else if(headSwap == 2){
    push()
noStroke()
 fill(100,100,200);
 ellipse(200,100,120);
pop()
  
//face2
 push()
  noStroke();
  fill(100,100,200);
  rect(140,100,120,80);
 pop()
  
  //ear
 push()
  noStroke();
  fill(100,100,200);
  rect(120,100,40,30);
  rect(240,100,40,30);
 pop()
  }
}
function keyPressed() {
  if (key === 'c') {
    pantsSwap+=1;
  }

    if (key === 'd') {
    bodySwap+=1;
  }

  if (keyCode === ENTER) {
    headSwap+=1;
  }
  print(headSwap)
}

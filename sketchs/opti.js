let color1;
let color2;
let color3;
let color4;
let g = 0;
let n = -20;
let b = -20;
var gifCreateLilly;
let speeder = .03;


function setup() {
    imageMode(CENTER);
  createCanvas(400, 400);
  color1 = color(48, 212, 190);
  color2 = color(48, 152, 212);
    color3 = color(218, 247, 166);
    color4 = color( 88, 24, 69);
    gifCreateLilly = createImg("./sketchs/sketchMedia/illusion/lilly.gif");
}

function draw() {
let gridSpeed = deltaTime * speeder;
  n += gridSpeed;
  
  //populate grid
 for (let i = 0; i < 50; i += 1) 
 {
   bigSquare(n, b)  
    n += 80;
   if (n >= 400){
     b += 40;
     n = n - 520;
   }
 } 
     for(g = -20; g < 400; g += 40){
           lilSquare((g-360),g,color3)
           lilSquare((g-160),g,color3)
           lilSquare((g+160),g,color3)
           lilSquare((g-320),g,color4)
           lilSquare(g,g,color4)
          lilSquare((g+320),g,color4)
     }
    gifCreateLilly.position(mouseX, mouseY);
}
function bigSquare (xSpot,ySpot){
  push()
  noStroke()
  translate(xSpot,ySpot);
  rectMode(CENTER);
  fill(color1);
  square(20,20,40);
  fill(color2);
  square(60,20,40);
  pop()
}

function lilSquare (xSpot,ySpot,colorType)
{
  push();
  ellipseMode(CENTER);
  noStroke();
  fill(colorType);
  //circlecluster1
  circle((xSpot-5),ySpot,5);
  circle((xSpot+5),ySpot,5);
    circle(xSpot,ySpot-5,5);
  circle(xSpot,ySpot+5,5);
  
  //circle cluster 2
    circle((xSpot+75),ySpot,5);
  circle((xSpot+85),ySpot,5);
    circle(xSpot+80,ySpot-5,5);
  circle(xSpot+80,ySpot+5,5);
    //circle cluster 3
    circle((xSpot+115),ySpot,5);
  circle((xSpot+125),ySpot,5);
    circle(xSpot+120,ySpot-5,5);
  circle(xSpot+120,ySpot+5,5);
  //circle cluster 4
      circle((xSpot+195),ySpot,5);
  circle((xSpot+205),ySpot,5);
    circle(xSpot+200,ySpot-5,5);
  circle(xSpot+200,ySpot+5,5);
  pop();
  
}

function mouseClicked(){
    let oldcolor3 = color3;
    let oldcolor4 = color4;
    color3 = oldcolor4;
    color4 =oldcolor3;
      //color3 =color(random(0,255),random(0,255),random(0,255));
}
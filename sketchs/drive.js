let carTurn;
let carTurnI;
let carNuetral;
let song;
let scene1Img;
let drove;
let outRunBG;
let bgImageNight;
let canva;
//let ctx;
let horizonLine = 310;
let colorSwitcher = true;
let roadEndXPos = 0;
let newCircuit;
let coolCamera;
let scene1;
let scene2;
let scene3;


function setup() {
  //scene manager
  soundFormats('mp3', 'ogg');
  scene1 = new Scene1();
  scene2 = new Scene2();
  scene3 = new Scene3();
  currentScene = scene1;
  currentScene.enterScene();
  
  song = loadSound("./sketchs/sketchMedia/drive/jerryColeStrippedGears.mp3");
  carNuetral = loadImage("./sketchs/sketchMedia/drive/carNuetral.png")
  carTurn = loadImage("./sketchs/sketchMedia/drive/carTurn.png")
  carTurnI = loadImage("./sketchs/sketchMedia/drive/carTurnInv.png")
  outRunFG = loadImage("./sketchs/sketchMedia/drive/outrunFG.png")
  scene1Img = loadImage("./sketchs/sketchMedia/drive/driving.png")
  drove = loadImage("./sketchs/sketchMedia/drive/youDrove.png")
  bgImageNight = loadImage("./sketchs/sketchMedia/drive/nightTime.png")
  canva = createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  playerCar = new myCar(width/2, 350, carNuetral,0);
  coolCamera = new Camera();
  bgRender = new bgRenderer(width/2, height/2,1);
  newCircuit = new circuit(50,900);
}

function draw() {
  currentScene.update();
  currentScene.display();
}
function mousePressed(){
  currentScene.mousePressed();
  currentScene.enterScene();
}

//Depreciated function that is used to draw lines, kept to pontentially help explain in easier code than final


// function drawRoad() {
//     const roadWidth = 100; // Initial width of the road
//     const horizonY = 500;  // Horizon line where road converges
//     // Draw the road edges using perspective
//     for (let i = horizonLine; i < horizonY; i += 14) {
//         let currentWidth = roadWidth * (i * 0.007); // Road narrows as it goes down
//         let offsetX = (400 - currentWidth + roadEndXPos) / 2;

//         // Draw left and right edges of the road
//         ctx.beginPath();
//         ctx.moveTo(offsetX, i);
//         ctx.lineTo(offsetX + currentWidth, i);
//         ctx.lineWidth = 60;
      
//         if (colorSwitcher == true) {
//         ctx.strokeStyle = '#666'; // Road color
//         colorSwitcher = false;
//         }
//         else if(colorSwitcher == false){
//         ctx.strokeStyle = '#A5A5A5'; // Road color
//         colorSwitcher = true;
//         }
      
//         ctx.stroke();
//     }
// }

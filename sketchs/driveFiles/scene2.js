
class Scene2{
  constructor(){
  
}
  
  update(){
      var dt = Math.min(1,(deltaTime/1000));
  coolCamera.update();
  playerCar.keyListener();
  newCircuit.create();
  playerCar.update(dt);
  playerCar.display();
  }
  
  display(){
   bgRender.display();
      newCircuit.render3D();
      playerCar.display();
  }
  
  enterScene(){
  coolCamera.init();
  playerCar.restart();
  song.play();
    
  }
  
  exitScene(){
    
  }
  
  mousePressed(){
           currentScene = scene3;  

}
}

class Scene1{
  constructor(){
  
}
  
  update(){
    
  }
  
  display(){
        push()
  imageMode(CENTER)
  image(scene1Img,200,200)
  pop()
  }
  
  enterScene(){
    
  }
  
  exitScene(){
    if (keyIsDown (86)){
    currentScene = scene2;
    }
  }
    mousePressed(){
     currentScene = scene2; 
      currentScene.enterScene();
  }

}

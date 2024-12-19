
class Scene3{
  constructor(){
  
}
  
  update(){
    
  }
  
  display(){
              push()
  imageMode(CENTER)
  image(drove,200,200)
  pop()
  }
  
  enterScene(){
    
  }
  
  exitScene(){
    if (keyIsDown (86)){
    currentScene = scene3;
    }
  }
  
    mousePressed(){
           currentScene = scene1;  

}
  
}
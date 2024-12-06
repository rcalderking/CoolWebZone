
let imageNiko;
let imageVolk;
let imagePee;
let imagePoo;
let walks = [];
function setup() {
  createCanvas(600, 900);
  imageNiko = loadImage("dogWalk/neek.png")
  imageVolk = loadImage("dogWalk/volk.png")
  imagePee = loadImage("dogWalk/pee.png")
  imagePoo = loadImage("dogWalk/poo.png")
  
  //friday
  walks.push(         
    new dogWalk(0,"8:00 am",0,true,true,true,false,false,false)
           )
    walks.push(         
     new dogWalk(1,"5:00 pm",0,true,true,true,false,false,false)
           )
  //saturday
    walks.push(         
     new dogWalk(0,"8:00 am",1,true,true,true,true,false,false)
           )
    walks.push(         
     new dogWalk(1,"6:42 pm",1,true,true,true,false,false,false)
           )
      walks.push(         
     new dogWalk(2,"8:30 pm",1,true,true,true,false,false,false)
           )
  
  //sunday
      walks.push(         
     new dogWalk(0,"1:00 pm",2,true,true,true,false,false,false)
           )
    walks.push(         
     new dogWalk(1,"9:00 pm",2,true,true,true,true,false,false)
           )
  //monday
        walks.push(
     new dogWalk(0,"8:00 am",3,true,true,true,false,false,false)
           )
    walks.push(         
    new  dogWalk(1,"4:30pm",3,true,true,false,true,false,true)
           )
  //tuesday
          walks.push(
     new dogWalk(0,"1:00 am",4,true,true,false,true,true,false)
           )
    walks.push(         
    new  dogWalk(1,"4:43am",4,true,true,true,false,false,false)
           )
      walks.push(         
    new  dogWalk(2,"10:30pm",4,true,true,true,true,true,true)
           )
  //wednesday
            walks.push(
     new dogWalk(0,"4:10 am",5,true,true,true,false,true,false)
           )
    walks.push(         
    new  dogWalk(1,"2:43am",5,true,true,true,false,false,false)
           )
      walks.push(         
    new  dogWalk(2,"9:30pm",5,true,true,true,true,true,true)
           )
  //thursday
              walks.push(
     new dogWalk(0,"10:20 am",6,true,true,false,true,true,true)
           )

      walks.push(         
    new  dogWalk(1,"11:30pm",6,true,true,true,false,true,false)
           )
}

function draw() {
  background(220);
  for (i = 0; i<walks.length; i++){
    walks[i].display();
  }
}

class dogWalk{
  constructor(xPos,theTime,today,Niko,nikoPee,nikoPoo,Volk,volkPee,volkPoo){
    this.Day = today;
    this.Time = theTime
    this.x = 10+ (xPos*200);
    this.y = 20 + (today*120);
    this.Niko = Niko;
    this.nPee = nikoPee;
    this.nPoo = nikoPoo;
    this.Volk = Volk;
    this.vPee = volkPee;
    this.vPoo = volkPoo;
  }
  display(){
    push()
    translate(this.x,this.y)
    textSize(18)
    if(this.Day == 0)
    {
    text("Friday",0,0)
    }
        if(this.Day == 1)
    {
    text("Saturday",0,0)
    }
        if(this.Day == 2)
    {
    text("Sunday",0,0)
    }
        if(this.Day == 3)
    {
    text("Monday",0,0)
    }
        if(this.Day == 4)
    {
    text("Tuesday",0,0)
    }
            if(this.Day == 5)
    {
    text("Wednesday",0,0)
    }
          if(this.Day == 6)
    {
    text("Thursday",0,0)
    }
    text(this.Time,0,20)
    if (this.Niko === true){
      image(imageNiko,0,20,50,75)
          if(this.nPee === true){
              image(imagePee,40,20,40,40)
            }
          if(this.nPoo === true){
              image(imagePoo,70,20,30,30)
            }
    }
    if (this.Volk === true){
      image(imageVolk,80,20,75,75)
          if(this.vPee === true){
            image(imagePee,130,20,40,40)
            }
          if(this.vPoo === true){
            image(imagePoo,160,20,30,30)
            }
    }    
    pop()

  }
}
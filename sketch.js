var car,wall;
 function setup() {
 createCanvas(800,400); 
 car=createSprite(200, 200, 50, 50);
 car.shapeColor="red"; 
 wall=createSprite(400, 200, 50, 50); 
 wall.shapeColor="red";
 car.velocityX=3
 }
   function draw() {
      background(255,255,255); 
      BounceOff(car,wall)
     
     /*if( IsTouching(car,wall)){
      car.shapeColor="green"
      wall.shapeColor="green"
     } 
    else{
      car.shapeColor="red" 
      wall.shapeColor="red" 
    }*/
 
  drawSprites(); 
}

function IsTouching(object1,object2){
   if(object1.x-object2.x<object1.width/2+object2.width/2 && 
      object2.x-object1.x<object1.width/2+object2.width/2 &&
      object1.y-object2.y<object1.height/2+object2.height/2 &&
      object2.y-object1.y<object1.height/2+object2.height/2){
          
      return true
             
      } 
          
      else{
         return false;
       
     }
           
}

function BounceOff(object1,object2){ 
    if(object1.x-object2.x<object1.width/2+object2.width/2 && 
    object2.x-object1.x<object1.width/2+object2.width/2){
       object1.velocityX=-1*object1.velocityX
       }
    }
// Constants
var CIRCLES_PER_SPLATTER = 20;
var MIN_RADIUS = 5;
var MAX_RADIUS = 25;
var DELAY = 500;
var counter = 0;
/* This program creates a paint splatter.
* It's art. */
function start(){
  setTimer(random_circle,DELAY);
}
function random_circle(){
    for(var i = 0; i< CIRCLES_PER_SPLATTER; i++){
   draw_circle(Randomizer.nextInt(MIN_RADIUS,MAX_RADIUS),
               Randomizer.nextColor(),
               Randomizer.nextInt(0,getWidth()),
               Randomizer.nextInt(0,getHeight()));
       
       counter++;
       if(counter == DELAY *3){
          stopTimer(random_circle);
       }
    }
               
}
function draw_circle(radius,color,x,y){
   var circle = new Circle(radius);
   circle.setColor(color);
   circle.setPosition(x,y);     
   add(circle);
   
}